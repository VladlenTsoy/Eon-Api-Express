const express = require('express');
const ChatController = require('../app/http/controller/settings/chat/ChatController');
const ContactController = require('../app/http/controller/settings/chat/ContactController');
const MessagesController = require('../app/http/controller/settings/chat/MessagesController');

const router = express.Router();





/** Чат **/

// Список чатов
router.get('/chats', ChatController.GetAll);
// Создать чат
router.post('/chat', ChatController.CreateValidate, ChatController.Create);

// Поиск контактов
router.post('/contacts/search', ContactController.GetAllBySearchValidate, ContactController.GetAllBySearch);

// Непрочитанные сообщения пользователя
router.get('/messages/user/:userId', MessagesController.GetByUserId);
// Все сообщения чата
router.get('/messages/chat/:chatId', MessagesController.GetByChatId);
// Создать сообщение
router.post('/message', MessagesController.Create);

module.exports = router;