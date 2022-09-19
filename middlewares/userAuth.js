'use strict';

const { usersModel } = require('../models/index');

async function checkUser(req, res, next) {
    try {

        const username = await usersModel.findOne({ where: { userName: req.body.username } });

        if (username) {
            return res.status(409).send('Username already taken')
        }

        const email = await usersModel.findOne({ where: { email: req.body.email } });

        if (email) {
            return res.status(409).send('Email already taken')
        }

        next();

    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    checkUser
}