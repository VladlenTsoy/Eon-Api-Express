const {body, validationResult} = require('express-validator');
const PasswordReset = require('../../../models/auth/PasswordReset');
const {User} = require('../../../models/User');
const {PasswordResetToEmailQueue} = require("../../../jobs/auth/password-reset-to-email/PasswordResetToEmailQueue");

const Validate = [
    body('email').isEmail().withMessage('Введите почту!'),
];

const Index = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    const {email} = req.body;

    try {
        // Создание хеша
        const hash = Math.floor(Math.random() * (99999 - 10000) + 10000);

        // Длительность кода (Один час)
        const expires = new Date();
        expires.setDate(expires.getHours() + 1);

        // Создание кода
        const pwdReset = await PasswordReset.query().insert({
            email: email,
            code: hash,
            expires_at: expires
        });

        // Отправка почты
        await PasswordResetToEmailQueue({email: pwdReset.email, code: pwdReset.code});

        return res.send({message: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
};

/**
 *  Проверка кода
 */

const CheckCodeValidate = [
    body('code').not().isEmpty().withMessage('Введите код!'),
];

const CheckCode = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    const {code, email} = req.body;

    try {
        //
        await PasswordReset.query().findOne({code, email});

        return res.send({message: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

/**
 *  Сброс пароля
 */

const ResetPasswordValidate = [
    body('code').not().isEmpty().withMessage('Введите код!'),
    body('email').isEmail().withMessage('Введите почту!'),
    body('password').isLength({min: 6}).withMessage('Пароль меньше 6 букв!')
];

const ResetPassword = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    // Отправленные
    const {code, password, email} = req.body;

    try {
        //
        const pwdReset = PasswordReset.query().findOne({code, email})
        if (!pwdReset)
            return res.status(500).json({message: 'Данный токен истек попробуйте еще раз!'});

        //
        PasswordReset.query().delete().where({code, email})

        //
        const user = await User.query().findOne({email});
        if (!user)
            return res.status(500).json({message: 'Не найден пользователь!'});

        //
        await User.query().update({password}).where({id: user.id})

        res.send({message: 'success'});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
};

module.exports = {Index, Validate, CheckCodeValidate, CheckCode, ResetPassword, ResetPasswordValidate};