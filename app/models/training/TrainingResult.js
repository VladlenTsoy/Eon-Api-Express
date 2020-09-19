const Model = require('../../../config/knex.config');
const moment = require('moment')

class TrainingResult extends Model {
    static tableName = 'training_results'
    static jsonAttributes = ['settings', 'data']

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {TrainingResult}