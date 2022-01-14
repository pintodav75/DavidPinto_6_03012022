const express = require('express');
const router = express.Router();
const userCtrl  = require('../controllers/user');
const auth = require('../middleware/auth');
const check_password = require('../middleware/check_password');

router.post('/signup', check_password, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;