const fs = require("fs");

// Вывод файла json
const parseLanguageJson = async (abbr) => {
    const data = await fs.readFileSync(__dirname + '/' + abbr + '.json');
    return await JSON.parse(data);
}

// Настройка Даты вывода
const changeJson = (json, user) => {
    return {
        server: {
            ...json.common,
            ...json.server
        },
        client: {
            ...json.common,
            ...json.client.common,
            ...json.client[user ? user.access : 'guest']
        }
    };
}

// Вывод языка по abbr
const languageByAttr = async (abbr, user) => {
    let json;

    if (abbr === 'ru-RU')
        json = await parseLanguageJson('ru');
    else
        json = await parseLanguageJson('en');

    return changeJson(json, user);
}

module.exports = {languageByAttr};