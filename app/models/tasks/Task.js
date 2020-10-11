const Model = require('config/knex.config');
const moment = require('moment')

class Task extends Model {
    static tableName = 'tasks'
    static virtualAttributes = ['url_image'];

    url_image() {
        return process.env.APP_URL + `/images/training/tasks/task_${this.discipline_id}_${this.id}.svg`;
    }


    static get relationMappings() {
        return {}
    }

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {Task};