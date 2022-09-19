'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { usersModel } = require('../models/index');

async function signup(req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedData = {
            userName: username,
            email: email,
            passWord: await bcrypt.hash(password, 10)
        }
        const user = await usersModel.create(hashedData);
        res.status(201).send(user);
    } catch (e) {
        console.log(e);
    }
}


async function login(req, res) {
    try {
        const BasicAuth = req.headers.authorization;
        const encodedData = BasicAuth.split(' ')[1];
        const decodedData = base64.decode(encodedData);
        const [username, pass] = decodedData.split(':');
        let user = await usersModel.findOne({ where: { userName: username } });
        if (user) {
            const checkPassResult = await bcrypt.compare(pass, user.passWord);
            if (checkPassResult) {
                res.status(200).json(`welcome back ${user.userName}`);
            } else {
                res.status(401).send('Enter valid password');
            }
        } else {
            res.status(401).send('No account found at this username');
        }
    } catch (e) {
        console.log(e);
    }
}


async function getAllUsers(req, res) {
    try {
        const users = await usersModel.findAll();
        res.json(users);
    } catch (e) {
        console.log(e);
    }
}











module.exports = {
    signup,
    getAllUsers,
    login
}