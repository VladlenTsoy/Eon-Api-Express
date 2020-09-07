const Model = require('../../../../config/knex.config');

class Chat extends Model {
    static get tableName() {
        return 'chats';
    }
}

module.exports = {Chat};