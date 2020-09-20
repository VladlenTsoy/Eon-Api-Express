const Model = require('../../../config/knex.config');

class PasswordReset extends Model{
    static tableName = 'password_resets'
}

module.exports = PasswordReset;