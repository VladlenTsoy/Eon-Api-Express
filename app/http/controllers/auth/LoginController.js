const {UserPassword} = require('models/User');
const {body, validationResult} = require('express-validator');
const OauthAccessTokenService = require('../../../services/auth/OauthAccessTokenService');
const VisitStatisticService = require('../../../services/VisitStatisticService');

const Validate = [
    // body('email').isEmail().withMessage('Введите почту!'),
    body('login').not().isEmpty().withMessage('Введите почту!'),
    body('password').isLength({min: 6}).withMessage('Пароль меньше 6 букв!')
];

const Index = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const language = req.language
        const {login, password} = req.body

        // Поиск пользователя по почте $2y$10$fPma.qkuW1rGFKC/LTe6BuzCe85WT2d4sVPLr4P7yIrvcFTv3cEQO
        const user = await UserPassword.query().where({email: login}).orWhere({login: login}).first()
        if (!user)
            return res.status(500).send({message: language.server.errors.invalid_email_password})

        // Проверка паролей
        const isMatch = await user.verifyPassword(password);
        if (!isMatch)
            return res.status(500).send({message: language.server.errors.invalid_email_password})

        // Статистика
        await VisitStatisticService.Create(user.id, req.body)

        // Создание токена
        const token = await OauthAccessTokenService.Create(user.id)

        res.send({token});
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {Validate, Index}