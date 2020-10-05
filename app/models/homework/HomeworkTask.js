const Model = require('../../../config/knex.config');
const moment = require('moment')

class HomeworkTask extends Model {
    static tableName = 'homework_tasks'
    static jsonAttributes = ['settings']

    static get relationMappings() {
        const {Task} = require('../tasks/Task');

        return {
            task: {
                filter: query => query.select('id', 'title', 'discipline_id'),
                relation: Model.HasOneRelation,
                modelClass: Task,
                join: {
                    from: 'homework_tasks.task_id',
                    to: 'tasks.id',
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

module.exports = {HomeworkTask};