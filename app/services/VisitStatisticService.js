const Visit = require('../models/statistic/Visit');
const ip = require('ip');

const Create = async (userId, cookie) =>{
    const {browser, screen, browserVersion, device} = cookie;

    // Добавление визитора
    return Visit.query().insertAndFetch({
        user_id: userId,
        browser,
        screen: JSON.stringify(screen),
        browser_version: browserVersion,
        device,
        ip: ip.address(),
        entrance_at: new Date(),
    });
}

module.exports = {Create};