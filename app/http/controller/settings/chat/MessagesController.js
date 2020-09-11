const {ChatMessage} = require('../../../../models/settings/chat/ChatMessage');
const {ChatMember} = require('../../../../models/settings/chat/ChatMember');

const GetByChatId = async (req, res) => {
    try {
        const {chatId} = req.params
        const {page} = req.query
        const pageSize = 25
        const user = req.user;

        await ChatMessage.query()
            .where({chat_id: chatId}).where('user_id', '!=', user.id)
            .update({status: 'view'})

        const messages = await ChatMessage.query()
            .where({chat_id: chatId})
            .orderBy('created_at', 'desc')
            .page(page - 1, pageSize)

        messages.last_page = Math.ceil(messages.total / pageSize)
        messages.current_page = parseInt(page)

        return res.send(messages);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

/**
 * Не прочитанные сообщения для польвателя
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @constructor
 */
const GetByUserId = async (req, res) => {
    try {
        const {userId} = req.params
        const user = req.user;

        // Проверка на пользователя
        if (user.id !== parseInt(userId))
            return res.status(500).send({message: ''});

        // TODO - QueryBuilder#pluck is deprecated. This method will be removed in version 3.0
        const chatIds = await ChatMember.query().where({user_id: userId}).pluck('chat_id')

        const messages = await ChatMessage.query()
            .whereIn('chat_id', chatIds)
            .where('user_id', '!=', userId)
            .where('status', '=', 'new')

        return res.send(messages);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

/**
 * Создание сообщения
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @constructor
 */
const Create = async (req, res) => {
    try {
        const user = req.user
        const {chatId, userId, message} = req.body

        // Проверка на пользователя
        if (user.id !== parseInt(userId))
            return res.status(500).send({message: ''});

        // Вывод контакта
        const contact = await ChatMember.query().where('user_id', '!=', user.id).findOne({chat_id: chatId})

        // Сохранение сообщения в базе
        const chatMessage = await ChatMessage.query()
            .insertAndFetch({
                chat_id: chatId,
                user_id: userId,
                status: contact.status === 'online' ? 'view' : 'new',
                message
            })

        // Отправка сообщения контакту
        req.io.emit(`chat_receive_messages_${contact.user_id}`, [chatMessage])

        // Вывод сообщение пользователю
        return res.send(chatMessage);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetByChatId, GetByUserId, Create}