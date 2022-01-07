const express = require('express');
const { route } = require('./user');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getSauce);
router.get('/', auth, sauceCtrl.getAllSauces);

module.exports = router;