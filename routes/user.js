const express = require('express');
const ContactController = require('../app/http/controller/settings/chat/ContactController');
const MessagesController = require('../app/http/controller/settings/chat/MessagesController');

const router = express.Router();

/* GET home page. */
router.get('/contacts', ContactController.GetAll);
/* GET home page. */
router.get('/messages/user/:userId', MessagesController.GetByUserId);
router.get('/messages/chat/:chatId', MessagesController.GetByChatId);
router.post('/message', MessagesController.Create);

module.exports = router;