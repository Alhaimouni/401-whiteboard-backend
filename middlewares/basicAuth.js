'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
require('dotenv').config();
const { usersModel } = require('../models/index');
const jwt = require('jsonwebtoken');


async function basicAuth(req, res, next) {
    try {
        const BasicAuth = req.headers.authorization;
        const encodedData = BasicAuth.split(' ')[1];
        const decodedData = base64.decode(encodedData);
        const [username, pass] = decodedData.split(':');
        let user = await usersModel.findOne({ where: { userName: username } });
        if (user) {
            const checkPassResult = await bcrypt.compare(pass, user.passWord);
            if (checkPassResult) {
                let newToken = jwt.sign({ username: user.userName }, process.env.SECRET);
                user.token = newToken;
                req.newUserWithToken = user;
                next();
            } else {
                next('Enter valid password');
            }
        } else {
            next('No account found at this username');

        }
    } catch (e) {
        console.log(e);
    }
}






module.exports = { basicAuth };