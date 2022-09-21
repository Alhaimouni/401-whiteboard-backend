"use strict";
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { usersModel } = require("../models/index");

async function bearerAuth(req, res, next) {
  try {
    console.log(`Inside bearerAuth middleware`);
    const bearer = req.headers.authorization;
    const userToken = bearer.split(" ")[1];
    const parsedToken = jwt.verify(userToken, process.env.SECRET);
    const user = await usersModel.findOne({where: { userName: parsedToken.username }});
    if (user) {
      req.user = user;
      next();
    } else {
      next("enter valid token");
    }
  } catch (e) {
    next("Invalid Login");
  }
}

module.exports = { bearerAuth };
