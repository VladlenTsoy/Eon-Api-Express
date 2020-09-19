const Model = require('../../../../config/knex.config');
const moment = require('moment')

class ChatMessage extends Model {
    static tableName = 'chat_messages';

    static modifiers = {
        orderByCreatedAt(builder) {
            builder.orderBy('created_at', 'desc');
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

module.exports = {ChatMessage};