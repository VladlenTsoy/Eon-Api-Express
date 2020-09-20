const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const infoMailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_ENCRYPTION,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    dkim: {
        domainName: "mail._domainkey",
        // keySelector: "rsa",
        privateKey: "v=DKIM1; k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCai0O2BPXajBj5RB+BGXVQyDoZ86vG+M1TYh1VsHiwZDpOQPd7lsNG3H4ayAyMSdp+j/o0RMktgem/WJh55w9y8CqP85rmTpqzTymMBRUPd6wEcjqxS/KJpTsPrhv3wBxNXZWmAYppR2m0iuluW13O1ST6Wv2sP/r2SGfq0LbOpQIDAQAB",
    }
});

infoMailer.use('compile', hbs({
    viewEngine: {
        extName: ".hbs",
        // defaultLayout: false        // <-----   added this
        defaultLayout: 'resources/views/email/Layouts.hbs'        // <-----   added this
    },
    viewPath: 'resources/views/email',
    extName: '.hbs', /* or '.handlebars' */
}));

const fromEmail = `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`;


module.exports = {infoMailer, fromEmail};