const Model = require('../../config/knex.config');
const Password = require('objection-password')();
const {Group} = require('../models/Group');

class User extends Model {
    static tableName = 'users'
    static hidden = ['password']
    static modifiers = {

        /**
         *
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
         *
         * @param builder
         */
        blocked(builder) {
            builder.whereRaw(`
                id IN (SELECT id FROM lock_statuses WHERE unblock = null)
            `)
        },

        /**
         *
         * @param builder
         */
        notBlocked(builder) {
            builder.whereRaw(`
                id NOT IN (SELECT id FROM lock_statuses WHERE unblock = null)
            `)
        }
    }

    static relationMappings = {
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

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {User, UserPassword: Password(User)};