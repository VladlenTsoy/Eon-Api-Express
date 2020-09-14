const express = require('express');
const ChatController = require('../app/http/controller/settings/chat/ChatController');
const ContactController = require('../app/http/controller/settings/chat/ContactController');
const MessagesController = require('../app/http/controller/settings/chat/MessagesController');

const router = express.Router();

/* GET home page. */
router.get('/chats', ChatController.GetAll);
router.post('/chat', ChatController.Create);
/* GET home page. */
router.post('/contacts/search', ContactController.GetAllBySearch);
/* GET home page. */
router.get('/messages/user/:userId', MessagesController.GetByUserId);
router.get('/messages/chat/:chatId', MessagesController.GetByChatId);
router.post('/message', MessagesController.Create);

module.exports = router;