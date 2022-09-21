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
    res.status(200).json(req.newUserWithToken);
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