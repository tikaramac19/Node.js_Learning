const express = require('express');
const router = express.Router();
const addUserApi = require('../controller/UserController');

router.post('/add-user', addUserApi)

module.exports = router;