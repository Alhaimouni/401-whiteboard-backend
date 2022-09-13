'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostsTable } = require('./post.model');
const { createCommentTable } = require('./comment.model');
const {CrudOperations} = require('../collections/user-comment-routes');

require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {

    // dialectOptions : {
    //     ssl : {
    //         require : false,
    //         rejectUnauthorized: false
    //     }
    // }

};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

const postsModel = createPostsTable(sequelize, DataTypes);
const posts = new CrudOperations(postsModel);

const commentModel = createCommentTable(sequelize,DataTypes);
const comments = new CrudOperations(commentModel);






module.exports = {

    dataBase: sequelize,  // for reel connection and will use in index.js
    posts, // for create the posts table and then use it in the routes.
    comments, // for create the posts table and then use it in the routes.

}