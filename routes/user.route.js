'use strict';

const express = require('express');
const { usersModel } = require('../models/index');
const { signup, login, getAllUsers } = require('../controllers/userControllers');
const { checkUser } = require('../middlewares/userAuth');
const { basicAuth } = require('../middlewares/basicAuth');
const { bearerAuth } = require('../middlewares/bearerAuth');
const router = express.Router();



router.post('/signup', checkUser, signup);
router.post('/signin', basicAuth, login);
router.get('/users',bearerAuth, getAllUsers);












module.exports = router;