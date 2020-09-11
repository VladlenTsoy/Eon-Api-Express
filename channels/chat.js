const ChatService = require('../app/services/settings/ChatService')

module.exports = async (socket) => {
    socket.on('chat_check_receive_messages', (data) => ChatService.CheckReceiveMessages(socket, data))
    socket.on('joined_the_chat', (data) => ChatService.Joined(socket, data))
    socket.on('left_the_chat', (data) => ChatService.Left(socket, data))
}