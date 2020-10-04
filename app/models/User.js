const Model = require('../../config/knex.config');
const Password = require('objection-password')();
const moment = require('moment')

class User extends Model {
    static tableName = 'users'
    static hidden = ['password', 'image']
    static jsonAttributes = ['setting']
    static virtualAttributes = ['url_image']

    url_image() {
        return `${process.env.APP_URL}/${this.image}`;
    }

    static modifiers = {
        /**
         * Вывод для контактов
         * @param builder
         */
        selectOnlyForContact(builder) {
            builder.withGraphFetched('group')
                .select('id', 'first_name', 'last_name', 'access', 'image');
        },

        /**
         * Поиск пользователя
         * @param builder
         * @param search
         */
        search(builder, search) {
            builder.where((_builder) => {
                _builder.where('id', 'LIKE', `%${search}%`)
                    .orWhere('first_name', 'LIKE', `%${search}%`)
                    .orWhere('last_name', 'LIKE', `%${search}%`)
                    .orWhere('login', 'LIKE', `%${search}%`)
                    .orWhere('email', 'LIKE', `%${search}%`)
            });
        },

        /**
         * Заблокированные
         * @param builder
         */
        blocked(builder) {
            builder.whereRaw(`
                id IN (SELECT user_id FROM lock_statuses WHERE unblock IS null)
            `)
        },

        /**
         * Незаблокированные
         * @param builder
         */
        notBlocked(builder) {
            builder.whereRaw(`
                id NOT IN (SELECT user_id FROM lock_statuses WHERE unblock IS null)
            `)
        }
    }

    static get relationMappings () {
        const {Group} = require('../models/Group');

        return {
            // Вывод группы
            group: {
                filter: query => query.select('id', 'title'),
                relation: Model.HasOneRelation,
                modelClass: Group,
                join: {
                    from: 'users.group_id',
                    to: 'groups.id',
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

module.exports = {User, UserPassword: Password(User)};