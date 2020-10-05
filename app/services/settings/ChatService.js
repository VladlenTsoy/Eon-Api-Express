const {ChatMember} = require('../../models/settings/chat/ChatMember');
const {ChatMessage} = require('../../models/settings/chat/ChatMessage');

/**
 * Присоединился к чату
 * @param socket
 * @param data
 * @return {Promise<void>}
 * @constructor
 */
const Joined = async (socket, data) => {
    const {userId, chatId} = data

    await ChatMessage.query()
        .where({chat_id: chatId}).where('user_id', '!=', userId)
        .update({status: 'view'})

    await ChatMember.query()
        .where({user_id: userId, chat_id: chatId})
        .update({status: 'online'})
}

/**
 * Вышел из чата
 * @param socket
 * @param data
 * @return {Promise<void>}
 * @constructor
 */
const Left = async (socket, data) => {
    const {userId, chatId} = data

    await ChatMember.query()
        .where({user_id: userId, chat_id: chatId})
        .update({status: 'offline'})
}

/**
 *
 * @param socket
 * @param data
 * @return {Promise<void>}
 * @constructor
 */
const Disconnect = async (socket, data) => {
    console.log(data)
}

module.exports = {Disconnect, Left, Joined}