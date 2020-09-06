const passport = require('passport');
const BearerStrategy = require('passport-http-bearer')
const jwt = require('jsonwebtoken');
const OauthAccessToken = require('../../models/auth/OauthAccessToken');
const {User} = require('../../models/User');

passport.use(new BearerStrategy(
    async function (token, done) {
        const {jti} = jwt.decode(token)

        const oauthAccess = await OauthAccessToken.query().findById(jti)
        if (!oauthAccess) return done(null, false)

        const user = await User.query().findById(oauthAccess.user_id)
        if (!user) return done(null, false)

        return done(null, user, {scope: 'all'})
    }
));

module.exports = passport.authenticate('bearer', {session: false});
