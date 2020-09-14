const {ChatMember} = require('../../../../models/settings/chat/ChatMember');
const {Chat} = require('../../../../models/settings/chat/Chat');

const GetAll = async (req, res) => {
    try {
        const user = req.user;

        const chatMembers = await ChatMember.query()
            .where('user_id', user.id)
            .withGraphFetched(`[
                contact(selectOnlyForContact),
                last_message(orderByCreatedAt),
            ]`)
            .select(['chat_id'])

        if (!chatMembers)
            return res.status(500).send({message: ''})

        return res.send(chatMembers);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

const Create = async (req, res) => {
    try {

        const user = req.user
        const {contactId} = req.body

        const chat = await Chat.query().insertAndFetch({})

        await ChatMember.query().insert({user_id: user.id, contact_id: contactId, chat_id: chat.id})
        await ChatMember.query().insert({user_id: contactId, contact_id: user.id, chat_id: chat.id})

        const chatMember = await ChatMember.query()
            .findOne({user_id: user.id, chat_id: chat.id})
            .withGraphFetched(`[
                contact(selectOnlyForContact),
                last_message(orderByCreatedAt),
            ]`)
            .select(['chat_id'])

        return res.send(chatMember);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetAll, Create}