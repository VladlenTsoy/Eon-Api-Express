const {infoMailer, fromEmail} = require('../../../../../config/nodemailer.config');

module.exports.PasswordRecovery = async ({email, code}) => {
    infoMailer.sendMail({
        from: fromEmail,
        to: email,
        subject: 'Восстановление пароля.',
        template: 'PasswordRecovery',
        context: {
            email: email,
            code: code
        }
    });
};