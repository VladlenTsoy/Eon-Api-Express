const Model = require('../../../../config/knex.config');
const {User} = require('../../User');
const {ChatMessage} = require('./ChatMessage');

class ChatMember extends Model {
    static tableName = 'chat_members';

    static relationMappings = {
        contact: {
            relation: Model.HasOneRelation,
            modelClass: User,
            join: {
                from: 'chat_members.contact_id',
                to: 'users.id',
            },
        },
        last_message: {
            relation: Model.HasOneRelation,
            modelClass: ChatMessage,
            join: {
                from: 'chat_members.chat_id',
                to: 'chat_messages.chat_id',
            },
        },
        not_read: {
            filter: query => query.select('chat_messages.id'),
            relation: Model.HasManyRelation,
            modelClass: ChatMessage,
            join: {
                from: 'chat_members.chat_id',
                to: 'chat_messages.chat_id',
            },
        }
    }
}

module.exports = {ChatMember};