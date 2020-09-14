const Model = require('../../config/knex.config');

class Group extends Model {
    static get tableName() {
        return 'groups';
    }
}

module.exports = {Group}