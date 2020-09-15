const {ChatMember} = require('../../../../models/settings/chat/ChatMember');
const {Chat} = require('../../../../models/settings/chat/Chat');
const {body, validationResult} = require('express-validator');

/**
 * Вывод всех чатов
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
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

/**
 * Проверка валидации при создании чата
 */
const CreateValidate = [
    body('contactId').not().isEmpty().withMessage('Вы не выбрали пользователя!'),
];

/**
 * Создать чат
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Create = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const user = req.user
        const {contactId} = req.body

        const checkContact = await ChatMember.query()
            .findOne({user_id: user.id, contact_id: contactId})
            .withGraphFetched(`[
                contact(selectOnlyForContact),
                last_message(orderByCreatedAt),
            ]`)
            .select(['chat_id'])

        if (checkContact)
            return res.send(checkContact);

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

module.exports = {GetAll, CreateValidate, Create}