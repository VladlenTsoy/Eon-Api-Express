const Model = require('../../config/knex.config');

class Group extends Model {
    static tableName = 'groups'
}

module.exports = {Group}