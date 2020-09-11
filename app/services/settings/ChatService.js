const {ChatMember} = require('../../models/settings/chat/ChatMember');
const {ChatMessage} = require('../../models/settings/chat/ChatMessage');

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

module.exports.Disconnect = async (socket, data) => {
    console.log(data)
}