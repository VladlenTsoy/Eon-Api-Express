const {ChatMember} = require('../../models/settings/chat/ChatMember');
const {ChatMessage} = require('../../models/settings/chat/ChatMessage');

module.exports.CheckNotificationCount = async (socket, data) => {
    const {userId} = data

    // TODO - QueryBuilder#pluck is deprecated. This method will be removed in version 3.0
    const chatIds = await ChatMember.query().where({user_id: userId}).pluck('chat_id')

    const messages = await ChatMessage.query()
        .whereIn('chat_id', chatIds)
        .where('user_id', '!=', userId)
        .where('status', '=', 'new')
        .select('id')

    socket.emit(`chat_receive_notification_count_${userId}`, messages.length)
}