const moment = require('moment')
const {LockStatus} = require('../../models/settings/LockStatus')
const {User} = require('../../models/User')
const OauthAccessTokenService = require('../../services/auth/OauthAccessTokenService');
const {UploadImage} = require('../../services/profile/ProfileImageService');
const {DeleteProfileImageQueue} = require('jobs/profile/delete-profile-image/DeleteProfileImageQueue');
const {body, validationResult} = require('express-validator');

/**
 *
 * @param status
 * @return {Promise<boolean>}
 * @private
 */
const _GetIsBlocked = async (status) => {
    return status ? status.unblock === null : false
}

/**
 *
 * @param status
 * @return {Promise<null|number>}
 * @private
 */
const _GetDayBlock = async (status) => {
    if (!status) return null

    if (status.unblock && moment(status.block).isAfter(status.unblock))
        return null

    return moment(status.block).diff(moment(), 'days')
}

/**
 *
 * @param status
 * @return {Promise<null|number>}
 * @private
 */
const _GetDayUnblock = async (status) => {
    if (!status) return null

    if (status.unblock && moment(status.block).isAfter(status.unblock))
        return null

    return moment(status.unblock).diff(moment(), 'days')
}

const _CheckBlock = async (user) => {
    const status = await LockStatus.query().findOne({user_id: user.id})
        .orderBy('created_at', 'desc')

    user.is_blocked = await _GetIsBlocked(status)
    user.day_block = await _GetDayBlock(status)
    user.day_unblock = await _GetDayUnblock(status)

    return user
}

/**
 *
 * @param users
 * @return {Promise<unknown[]>}
 * @private
 */
const _CheckBlockUsers = async (users) => {
    return await Promise.all(users.map(async user => await _CheckBlock(user)))
}

/**
 *
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetCurrent = async (req, res) => {
    try {
        const user = req.user
        return res.send(user)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Проверка валидации при создании чата
 */
const UpdateValidate = [
    body('email').isEmail().withMessage('Введите почту!'),
    body('first_name').not().isEmpty().withMessage('!'),
    body('last_name').not().isEmpty().withMessage('!'),
];

/**
 *
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Update = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const user = req.user
        const {fist_name, last_name, email, login, phone, date_of_birth} = req.body

        const updated = await User.query().updateAndFetchById(user.id, {
            fist_name,
            last_name,
            email,
            login,
            phone,
            date_of_birth: date_of_birth ? moment(date_of_birth).format('YYYY-MM-DD HH:mm:ss') : null
        })

        return res.send(updated)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Обновление изображение
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const UpdateImage = async (req, res) => {
    try {
        const user = req.user
        const files = req.files

        // Удаление фотограции на очередь
        await DeleteProfileImageQueue({image: user.image})
        // Загрузка фотографии
        const image = await UploadImage(files.image, user.id)
        // Обновление фотографии
        const update = await User.query().updateAndFetchById(user.id, {image})

        return res.send(update)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Блокировка по Id
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Block = async (req, res) => {
    try {
        const user = req.user
        const {id} = req.params

        await LockStatus.query().insert({
            block: moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss'),
            user_id: id,
            blocker_id: user.id
        })

        let _user = await User.query().findById(id)
        _user = await _CheckBlock(_user)

        return res.send({day_block: _user.day_block})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Рзазблокировка по Id
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Unblock = async (req, res) => {
    try {
        const user = req.user
        const {id} = req.params

        await LockStatus.query().insert({
            unblock: moment().add(20, 'days').format('YYYY-MM-DD HH:mm:ss'),
            user_id: id,
            blocker_id: user.id
        })

        let _user = await User.query().findById(id)
        _user = await _CheckBlock(_user)

        return res.send({day_unblock: _user.day_unblock})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Скрыть пользователя по Id
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Hide = async (req, res) => {
    try {
        const {id} = req.params
        const user = req.user

        await User.query().updateAndFetchById(id, {
            delete_id: user.id,
            delete_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        })

        return res.send({status: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Выход
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Logout = async (req, res) => {
    try {
        const user = req.user;
        await OauthAccessTokenService.Delete(user.id)
        req.logout();
        res.send({status: 'success'});
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {
    _CheckBlock,
    Block,
    Unblock,
    Hide,
    _CheckBlockUsers,
    GetCurrent,
    Logout,
    Update,
    UpdateValidate,
    UpdateImage
}