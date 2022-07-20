const express = require('express');
const app = express();
const router = express.Router()
const services = require('../services/render')

// @description Root Router
// @Method GET/

router.get('/',services.homeRoutes );

// @description add_user Router
// @Method GET/add_user
router.get('/add_user', services.add_user);

// @description update_user Router
// @Method GET/update_user
router.get('/update_user',services.update_user);

module.exports = router;