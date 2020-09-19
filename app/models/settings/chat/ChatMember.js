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
    }

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {ChatMember};