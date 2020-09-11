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

const Create = async (req, res) => {
    try {
        const user = req.user
        const {chatId, userId, message} = req.body

        if (user.id !== parseInt(userId))
            return res.status(500).send({message: ''});

        const contact = await ChatMember.query().where('user_id', '!=', user.id).findOne({chat_id: chatId})

        const chatMessage = await ChatMessage.query()
            .insertAndFetch({
                chat_id: chatId,
                user_id: userId,
                status: contact.status === 'online' ? 'view' : 'new',
                message
            })

        /***/
        req.io.emit(`chat_receive_messages_${contact.user_id}`, [chatMessage])

        return res.send(chatMessage);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetByChatId, Create}