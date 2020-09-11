const ChatService = require('../app/services/settings/ChatService')

module.exports = async (socket) => {
    socket.on('joined_the_chat', (data) => ChatService.Joined(socket, data))
    socket.on('left_the_chat', (data) => ChatService.Left(socket, data))
    socket.on('disconnect', (data) => ChatService.Disconnect(socket, data))
}