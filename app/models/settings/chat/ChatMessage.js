const Model = require('../../../../config/knex.config');

class ChatMessage extends Model {
    static get tableName() {
        return 'chat_messages';
    }

    static modifiers = {
        orderByCreatedAt(builder) {
            builder.orderBy('created_at', 'desc');
        },
        countNew(builder) {
            builder.where('status', 'new')
        }
    }
}

module.exports = {ChatMessage};