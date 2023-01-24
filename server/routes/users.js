var express = require('express');
const { postSignup } = require('../controller/UserController');
var router = express.Router();

router.post('/signup', postSignup)

module.exports = router;
