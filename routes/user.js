const express = require('express');
const SelectAlgorithmController = require('../app/http/controller/settings/algorithm/SelectAlgorithmController');
const ChatController = require('../app/http/controller/settings/chat/ChatController');
const ContactController = require('../app/http/controller/settings/chat/ContactController');
const MessagesController = require('../app/http/controller/settings/chat/MessagesController');

const router = express.Router();



/** Печать листов **/

// Печать листа анзан
router.post('/algorithm/list', SelectAlgorithmController.GetPrint);


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