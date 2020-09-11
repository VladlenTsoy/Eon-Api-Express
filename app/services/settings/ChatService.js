const {ChatMember} = require('../../models/settings/chat/ChatMember');
const {ChatMessage} = require('../../models/settings/chat/ChatMessage');

module.exports.CheckReceiveMessages = async (socket, data) => {
    const {userId} = data

    // TODO - QueryBuilder#pluck is deprecated. This method will be removed in version 3.0
    const chatIds = await ChatMember.query().where({user_id: userId}).pluck('chat_id')

    const messages = await ChatMessage.query()
        .whereIn('chat_id', chatIds)
        .where('user_id', '!=', userId)
        .where('status', '=', 'new')

    socket.emit(`chat_receive_messages_${userId}`, messages)
}

module.exports.Joined = async (socket, data) => {
    const {userId, chatId} = data

    await ChatMessage.query()
        .where({chat_id: chatId}).where('user_id', '!=', userId)
        .update({status: 'view'})

    await ChatMember.query()
        .where({user_id: userId, chat_id: chatId})
        .update({status: 'online'})
}

module.exports.Left = async (socket, data) => {
    const {userId, chatId} = data

    await ChatMember.query()
        .where({user_id: userId, chat_id: chatId})
        .update({status: 'offline'})
}