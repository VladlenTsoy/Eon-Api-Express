const express = require('express');
const ForgotPasswordController = require('../app/http/controllers/auth/ForgotPasswordController');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('Work..'));


/* Забыли пароль */
router.post('/forgot-password', ForgotPasswordController.Validate, ForgotPasswordController.Index);

module.exports = router;