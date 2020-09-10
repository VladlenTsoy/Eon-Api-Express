const {ChatMember} = require('../../../../models/settings/chat/ChatMember');

const GetAll = async (req, res) => {
    try {
        const user = req.user;

        const chatMembers = await ChatMember.query()
            .where('user_id', user.id)
            .withGraphFetched(`[
                contact(selectOnlyForContact),
                last_message(orderByCreatedAt),
                not_read(countNew)
            ]`)
            .select(['chat_id'])

        if (!chatMembers)
            return res.status(500).send({message: ''})

        return res.send(chatMembers);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetAll}