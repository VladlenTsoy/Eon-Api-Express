const ChatChannel = require('./chat')

module.exports = (socket) => {
    // console.log('a user connected');

    ChatChannel(socket)

    socket.on('disconnect', () => {
        // console.log('user disconnected');
    });
}