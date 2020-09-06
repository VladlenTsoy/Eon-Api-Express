const Model = require('../../config/knex.config');
const Password = require('objection-password')();

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get hidden() {
        return ['password'];
    }
}

module.exports = {User, UserPassword: Password(User)};