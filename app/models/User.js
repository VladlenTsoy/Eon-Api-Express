const Model = require('../../config/knex.config');
const Password = require('objection-password')();
const {Group} = require('../models/Group');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get hidden() {
        return ['password'];
    }

    static modifiers = {
        selectOnlyForContact(builder) {
            builder.select('id', 'first_name', 'last_name', 'access', 'image');
        },
        search(builder, search) {
            builder.where('id', 'LIKE', `%${search}%`)
                .orWhere('first_name', 'LIKE', `%${search}%`)
                .orWhere('last_name', 'LIKE', `%${search}%`)
                .orWhere('login', 'LIKE', `%${search}%`)
                .orWhere('email', 'LIKE', `%${search}%`);
        },
        blocked (builder) {
            builder.whereRaw(`
                id IN (SELECT id FROM lock_statuses WHERE unblock = null)
            `)
        },
        notBlocked (builder) {
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
}

module.exports = {User, UserPassword: Password(User)};