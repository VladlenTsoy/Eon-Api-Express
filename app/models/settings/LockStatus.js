const Model = require('../../../config/knex.config');

class LockStatus extends Model {
    static tableName = 'lock_statuses'
    static jsonAttributes = ['data']

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['name'],
            properties: {
                id: {type: 'integer'},
                title: {type: 'string'},
                abbr: {type: 'string'},
                image: {type: 'string'},
                data: {type: 'object'},
            }
        };
    }

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {LockStatus}