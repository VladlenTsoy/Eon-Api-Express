const {languageByAttr} = require("../resources/languages");

module.exports.selectLanguage = async (req, res, next) => {
    const {language} = req.cookies;
    if (language) {
        req.language = await languageByAttr(language, req.user);
        global.language = req.language;
    }
    // console.log(req.language)
    next();
}