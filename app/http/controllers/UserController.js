const moment = require('moment')
const {LockStatus} = require('../../models/settings/LockStatus')

const _CheckBlock = async (users) => {
    return await users.map(async user => {
        const status = await LockStatus.query().findOne({user_id: user.id})
            .orderBy('created_at', 'asc')

        console.log(status)
        if (!status)
            user.day_block = null

        if (status.block < status.unblock)
            user.day_block = null

        user.day_block = moment().diff(status.block, 'days')
    })
}

module.exports = {_CheckBlock}