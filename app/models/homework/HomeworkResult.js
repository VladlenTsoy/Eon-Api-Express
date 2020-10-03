const Model = require('../../../config/knex.config');
const moment = require('moment')

class HomeworkResult extends Model {
    static tableName = 'homework_results'
    static jsonAttributes = ['totals', 'result']

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {HomeworkResult};