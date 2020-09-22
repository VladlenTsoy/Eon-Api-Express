const OauthAccessToken = require('../../models/auth/OauthAccessToken');
// const jwt = require('jsonwebtoken');
// const moment = require('moment'); // require
// const md5 = require('md5');
const axios = require('axios');

/**
 * Создание токена
 * @param userId
 * @param email
 * @param password
 * @return {Promise<*>}
 * @constructor
 */
const Create = async (userId, email, password) => {
    // Удалить предыдущий токен
    await OauthAccessToken.query().delete().where({user_id: userId})

    const token = await axios.post('http://192.168.1.37:8000/api/login', {login: email, password})
    // const hash = md5(userId);
    //
    // // Создание токена
    // const access = await OauthAccessToken.query().insertAndFetch({
    //     id: hash,
    //     user_id: userId,
    //     client_id: 1,
    //     name: 'EON',
    //     scopes: '[]',
    //     revoked: 0,
    //     expires_at: moment().add(30, 'days').format('YYYY-MM-DD HH:mm:ss'),
    // });
    //
    // const token = await jwt.sign({
    //     "aud": "7",
    //     "jti": hash,
    //     "iat": 1600706597,
    //     "nbf": 1600706597,
    //     "exp": 1632242597,
    //     "sub": "1",
    //     "scopes": []
    // }, 'fSuQSv8srByT0f09626oiY6cvzuf7vxXQG3dy5Yu', {algorithm: 'RS256'});
    return token.data.token;
}

module.exports = {Create}