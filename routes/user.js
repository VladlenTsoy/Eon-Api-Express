const express = require('express');
const ContactController = require('../app/http/controller/settings/chat/ContactController');

const router = express.Router();

/* GET home page. */
router.get('/contacts', ContactController.GetAll);

module.exports = router;