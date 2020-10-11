const OauthAccessToken = require('../../models/auth/OauthAccessToken');
const jwt = require('jsonwebtoken');
const moment = require('moment'); // require
const md5 = require('md5');

/**
 * Создание токена
 * @param userId
 * @return {Promise<*>}
 * @constructor
 */
const Create = async (userId) => {
    // Удалить предыдущий токен
    await OauthAccessToken.query().delete().where({user_id: userId})

    const hash = md5(userId);

    // Создание токена
    await OauthAccessToken.query().insertAndFetch({
        id: hash,
        user_id: userId,
        client_id: 1,
        name: 'EON',
        scopes: '[]',
        revoked: 0,
        expires_at: moment().add(30, 'days').format('YYYY-MM-DD HH:mm:ss'),
    });

    return await jwt.sign({
        "aud": "7",
        "jti": hash,
        "iat": 1600706597,
        "nbf": 1600706597,
        "exp": 1632242597,
        "sub": "1",
        "scopes": []
    }, 'fSuQSv8srByT0f09626oiY6cvzuf7vxXQG3dy5Yu');
}

const Delete = async (userId) => {
    await OauthAccessToken.query().delete().where({user_id: userId});
}

module.exports = {Create, Delete}