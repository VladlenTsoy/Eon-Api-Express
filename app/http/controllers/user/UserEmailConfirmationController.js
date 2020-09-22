const EmailConfirmation = require('../../../models/auth/EmailConfirmation');
const {User} = require('../../../models/User');
const moment = require('moment');
const {EmailConfirmationQueue} = require("../../../jobs/auth/email-confirmation/EmailConfirmationQueue");
const {body, validationResult} = require('express-validator');

/**
 * Создание записи на проверку почты
 * @param user
 * @return {Promise<*>}
 */
const createEmailConfirmation = async (user) => {
    // Создание хеша
    const hash = Math.floor(Math.random() * (99999 - 10000) + 10000);

    // Удаление предыдущих потдверждений
    await EmailConfirmation.query().where({
        user_id: user.id,
        email: user.email
    }).delete()

    // Создания кода подтверждения
    const confCode = await EmailConfirmation.query().insert({
        user_id: user.id,
        email: user.email,
        // Токен на семь дней
        expires_at: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss'),
        code: hash
    });

    return confCode.code;
};

//
const CheckOrCreateCode = async (req, res) => {
    try {
        const checkCode = await EmailConfirmation.query()
            .where('user_id', '=', req.user.id)
            .where('email', '=', req.user.email)
            .where('expires_at', '>', moment().utc().format())

        if (checkCode)
            return res.send({message: 'success'})

        const code = await createEmailConfirmation(req.user);

        // Создание очереди на отправку потверждения на почту
        await EmailConfirmationQueue({email: req.user.email, code}, req.language.server);

        return res.send({message: 'success'})
    } catch (e) {
        res.status(500).send({message: e.message});
    }
}

//
const VerificationCodeValidate = [
    body('verification_code').not().isEmpty().withMessage('Введите код подтверждения!'),
];

//
const VerificationCode = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const {verification_code} = req.body;

        const code = await EmailConfirmation.query().findOne({
            code: verification_code,
            user_id: req.user.id,
            email: req.user.email
        });

        if (!code)
            return res.status(500).send({message: req.language.server.errors.invalid_code, code: 'invalid_code'})

        const user = await User.query().where({id: code.user_id}).update({email_verified_at: moment().utc().format()})

        return res.send({message: 'success', user: {email_verified_at: user.email_verified_at}})
    } catch (e) {
        res.status(500).send({message: e.message});
    }
}

//
const ResendCode = async (req, res) => {
    try {
        const code = await createEmailConfirmation(req.user);

        // Создание очереди на отправку потверждения на почту
        await EmailConfirmationQueue({email: req.user.email, code}, req.language.server);

        return res.send({message: req.language.server.email_confirmation_code_sent})
    } catch (e) {
        res.status(500).send({message: e.message});
    }
}

module.exports = {createEmailConfirmation, CheckOrCreateCode, VerificationCode, ResendCode, VerificationCodeValidate};