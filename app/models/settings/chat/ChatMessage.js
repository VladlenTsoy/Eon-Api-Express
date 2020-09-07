const Model = require('../../../../config/knex.config');

class ChatMessage extends Model {
    static get tableName() {
        return 'chat_messages';
    }
}

module.exports = {ChatMessage};