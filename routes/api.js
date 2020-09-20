const express = require('express');
const ForgotPasswordController = require('../app/http/controllers/auth/ForgotPasswordController');
const LanguageController = require('../app/http/controllers/settings/LanguageController');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('Work..'));


/* Язык */
router.get('/language', LanguageController.GetByAbbr);


/* Забыли пароль */
router.post('/forgot-password', ForgotPasswordController.Validate, ForgotPasswordController.Index);

module.exports = router;