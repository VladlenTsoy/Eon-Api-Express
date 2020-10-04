const moment = require('moment')
const {LockStatus} = require('../../models/settings/LockStatus')
const {User} = require('../../models/User')

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

module.exports = {_CheckBlock, Block, Unblock, Hide, _CheckBlockUsers}