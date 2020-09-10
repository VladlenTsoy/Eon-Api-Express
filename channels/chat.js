const ChatService = require('../app/services/settings/ChatService')

module.exports = async (socket) => {
    socket.on('chat_check_notification_count', (data) => ChatService.CheckNotificationCount(socket, data))
}