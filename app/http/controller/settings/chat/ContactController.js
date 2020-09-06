const {User} = require('../../../../models/User');
const firestore = require('../../../../../config/firebase.config')
const uniqBy = require('lodash/uniqBy');
const concat = require('lodash/concat');

const GetAll = async (req, res) => {
    try {
        const user = req.user;

        //
        const messagesRef = firestore.collection('messages')

        // Исходящие
        const snapshotOutbox = await messagesRef
            .where('user_id', '==', user.id)
            .orderBy('created_at', 'desc').get()

        // Входящие
        const snapshotInbox = await messagesRef
            .where('contact_id', '==', user.id)
            .orderBy('created_at', 'desc').get()

        // snapshot.empty
        const messages = [];
        await concat(snapshotOutbox.docs, snapshotInbox.docs).forEach(doc => messages.push({
            ...doc.data(),
            id: doc.id,
            created_at: doc.data().created_at.seconds
        }))

        // Вывод id контактов
        const contactsId = uniqBy(messages, 'contact_id').map(message => message.contact_id)

        //
        const supportEonContact = await User.query()
            .where({'id': 365})
            .select(['id', 'first_name', 'last_name', 'image']);

        // Вывод контактов
        const contacts = await User.query()
            .whereIn('id', contactsId)
            .select(['id', 'first_name', 'last_name', 'image'])

        // Последнее сообщение
        const contactsWithMessage = concat(contacts, supportEonContact).map(contact => {
            const lastMessages = messages.filter(message => message.contact_id === contact.id || message.user_id === contact.id);
            const lastMessage = lastMessages.sort((a, b) => b.created_at - a.created_at)
            if (lastMessage[0])
                contact.messages = {
                    last: lastMessage[0],
                    not_read: 0
                }
            return contact
        })

        return res.send(contactsWithMessage);
    } catch (e) {
        console.error(e)
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetAll}