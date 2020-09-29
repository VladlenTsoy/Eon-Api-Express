const Model = require('../../../config/knex.config');

class Category extends Model {
    static tableName = 'categories'
}

module.exports = {Category};