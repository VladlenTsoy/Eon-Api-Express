const {languageByAttr} = require("../resources/languages");

module.exports.selectLanguage = async (req, res, next) => {
    const {language} = req.cookies
    req.language = await languageByAttr(language || 'ru-RU', req.user);
    global.language = req.language;
    next();
}