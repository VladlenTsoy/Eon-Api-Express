const Model = require('../../../config/knex.config');

class Visit extends Model{
    static tableName = 'visits'
}

module.exports = Visit;