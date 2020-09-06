const Model = require('../../../config/knex.config');

class OauthAccessToken extends Model{
    static get tableName() {
        return 'oauth_access_tokens';
    }
}

module.exports = OauthAccessToken;