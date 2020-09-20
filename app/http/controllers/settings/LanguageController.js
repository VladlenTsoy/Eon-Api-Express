const {Language} = require('../../../models/settings/Language');
const {languageByAttr} = require("../../../../resources/languages");

// Вывод языка по аббревиатуре
module.exports.GetByAbbr = async (req, res) => {
    const {abbr} = req.query;
    try {
        // Вывод выбронного языка
        let language = await Language.query().findOne({abbr}).select('id', 'title', 'abbr', 'data')

        // Проверка существования выбранного языка
        if(!language)
            language = await Language.query().findOne({abbr: 'en-US'}).select('id', 'title', 'abbr', 'data')

        // Вывод данных языка language.config.js через middleware
        language.data = (await languageByAttr(abbr, req.user)).client

        // вывод всех языков для выбора
        language.languages = await Language.query().select('id', 'title', 'icon', 'abbr')

        res.send(language);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}