const Model = require('../../config/knex.config');
const moment = require('moment')

class Group extends Model {
    static tableName = 'groups'

    static modifiers = {
        /**
         * Поиск
         * @param builder
         * @param search
         */
        search(builder, search) {
            builder.where((_builder) => {
                _builder.where('id', 'LIKE', `%${search}%`)
                    .orWhere('title', 'LIKE', `%${search}%`)
            });
        },
    }

    static get relationMappings() {
        const {User} = require('./User.js')
        const {Category} = require('./settings/Category')
        const {HomeworkSent} = require('./homework/HomeworkSent')

        return {
            students_count: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'groups.id',
                    to: 'users.group_id',
                },
            },
            category: {
                filter: query => query.select('id', 'title'),
                relation: Model.HasOneRelation,
                modelClass: Category,
                join: {
                    from: 'groups.category_id',
                    to: 'categories.id',
                },
            },
            last_homework: {
                filter: query => query.select('homework_sent.homework_id', 'homework_sent.created_at'),
                relation: Model.HasOneThroughRelation,
                modelClass: HomeworkSent,
                join: {
                    from: 'groups.id',
                    through: {
                        from: 'users.group_id',
                        to: 'users.id'
                    },
                    to: 'homework_sent.user_id',
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

module.exports = {Group}