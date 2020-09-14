const Model = require('../../../config/knex.config');

class LockStatus extends Model {
    static get tableName() {
        return 'lock_statuses';
    }
}

module.exports = {LockStatus}