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

    return moment().diff(status.block, 'days')
}

/**
 *
 * @param status
 * @return {Promise<null|number>}
 * @private
 */
const _GetDayUnblock = async (status) => {
    if (!status) return null

    if (status.unblock && moment(status.block).isBefore(status.unblock))
        return null

    return moment().diff(status.block, 'days')
}

/**
 *
 * @param users
 * @return {Promise<unknown[]>}
 * @private
 */
const _CheckBlock = async (users) => {
    return await Promise.all(users.map(async user => {
        const status = await LockStatus.query().findOne({user_id: user.id})
            .orderBy('created_at', 'desc')

        user.is_blocked = await _GetIsBlocked(status)
        user.day_block = await _GetDayBlock(status)
        user.day_unblock = await _GetDayUnblock(status)

        return user
    }))
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
            block: moment().format('YYYY-MM-DD HH:mm:ss').add(5, 'days'),
            user_id: id,
            blocker_id: user.id
        })

        const _user = await User.query().findById(id)
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
            unblock: moment().format('YYYY-MM-DD HH:mm:ss').add(5, 'days'),
            user_id: id,
            blocker_id: user.id
        })

        const _user = await User.query().findById(id)
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

module.exports = {_CheckBlock, Block, Unblock, Hide}