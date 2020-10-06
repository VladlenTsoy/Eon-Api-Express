const Model = require('../../../config/knex.config');
const moment = require('moment')

class HomeworkSent extends Model {
    static tableName = 'homework_sent'

    static get relationMappings() {
        const {Homework} = require('models/homework/Homework');

        return {
            homework: {
                filter: query => query.select('id', 'level'),
                relation: Model.HasOneRelation,
                modelClass: Homework,
                join: {
                    from: 'homework_sent.homework_id',
                    to: 'homework.id',
                },
            },
        }
    }

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {HomeworkSent};