const {body, validationResult} = require('express-validator');
const {UserPassword} = require('../../../models/User');
const {EmailConfirmationQueue} = require('../../../jobs/auth/email-confirmation/EmailConfirmationQueue');
const OauthAccessTokenService = require('../../../services/auth/OauthAccessTokenService');
const VisitStatisticService = require('../../../services/VisitStatisticService');
const {createEmailConfirmation} = require("../user/UserEmailConfirmationController");


const Validate = [
    body('first_name').not().isEmpty().withMessage('Введите имя!'),
    body('last_name').not().isEmpty().withMessage('Введите фамилию!'),
    body('email').isEmail().withMessage('Введите почту!'),
    body('password').isLength({min: 6}).withMessage('Пароль меньше 6 букв!')
];

const Index = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    // Отправленные
    const {email, password, first_name, last_name} = req.body

    try {
        // Поиск пользователя по почте
        const checkEmail = await UserPassword.query().findOne({email});
        if (checkEmail)
            return res.status(500).send({message: req.language.server.errors.duplicate_email});

        // Регистрация пользователя
        const user = await UserPassword.query().insertAndFetch(
            {
                email,
                password,
                first_name,
                last_name,
                // access: 'teacher',
                // center_id: 32,
                setting: {}
            }
        )

        // Создание кода
        const code = await createEmailConfirmation(user);

        // Создание очереди на отправку потверждения на почту
        await EmailConfirmationQueue({email: user.email, code}, req.language.server);

        // Статистика
        await VisitStatisticService.Create(user.id, req.body);

        // Создание токена
        const token = await OauthAccessTokenService.Create(user.id, email, password);

        res.send({token});
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {Validate, Index};