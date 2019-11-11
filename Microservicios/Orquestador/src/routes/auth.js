const express = require('express');

var auth = require('../middlewares/auth');
var router = express.Router();

router.get('/auth', auth.ensureAuth);

module.exports = router;