const Model = require('../../config/knex.config');
const Password = require('objection-password')();

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
        }
    }
}

module.exports = {User, UserPassword: Password(User)};