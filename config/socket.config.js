const socket = require("socket.io");

const socketSetting = (app) => {
    app.io = socket();
};

module.exports = {socketSetting}