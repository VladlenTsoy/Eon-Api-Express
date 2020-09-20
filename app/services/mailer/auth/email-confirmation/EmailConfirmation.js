const {infoMailer, fromEmail} = require('../../../../../config/nodemailer.config');

const EmailConfirmation = async ({email, code}, language) => {
    return infoMailer.sendMail({
        from: fromEmail,
        to: email,
        subject: language.email_confirmation,
        template: 'EmailConfirmation',
        context: {
            email: email,
            code: code,
            language
        }
    });
}

module.exports = {EmailConfirmation}