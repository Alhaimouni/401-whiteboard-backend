'use strict';

const express = require('express');
const { usersModel } = require('../models/index');
const { signup, login, getAllUsers } = require('../controllers/userControllers');
const { checkUser } = require('../middlewares/userAuth');
const router = express.Router();



router.post('/signup', checkUser, signup);

router.post('/login', login);

router.get('/users', getAllUsers);




module.exports = router;