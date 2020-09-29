const Model = require('../../config/knex.config');
const moment = require('moment')
const {ref} = require('objection');

class Group extends Model {
    static tableName = 'groups'

    static get modifiers() {
        const {User} = require('./User.js')

        return {
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

            /**
             * Вывод только для отображения
             * @param builder
             */
            selectOnlyOutput(builder) {
                builder
                    .withGraphFetched(`[category(), last_homework()]`)
                    .select('id', 'title',
                        User.query()
                            .modify('notBlocked')
                            .where({
                                group_id: ref('groups.id'),
                                delete_id: null
                            })
                            .count()
                            .as('students_count')
                    )

            },
        }
    }

    static get relationMappings() {
        const {Category} = require('./settings/Category')
        const {HomeworkSent} = require('./homework/HomeworkSent')

        return {
            // Категория
            category: {
                filter: query => query.select('id', 'title'),
                relation: Model.HasOneRelation,
                modelClass: Category,
                join: {
                    from: 'groups.category_id',
                    to: 'categories.id',
                },
            },
            // Последнее дом задание
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