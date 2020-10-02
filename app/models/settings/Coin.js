const Model = require('../../../config/knex.config');

class Coin extends Model {
    static tableName = 'coins'
}

module.exports = {Coin}