'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostsTable } = require('./post.model');
const { createCommentTable } = require('./comment.model');
const {CrudOperations} = require('../collections/user-comment-routes');

require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {

    dialectOptions : {
        ssl : {
            require : false,
            rejectUnauthorized: false
        }
    }

};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

const postsModel = createPostsTable(sequelize, DataTypes);
const posts = new CrudOperations(postsModel);

const commentModel = createCommentTable(sequelize,DataTypes);
const comments = new CrudOperations(commentModel);

postsModel.hasMany(commentModel,{foreignKey:'textId',sourceKey:'id'});
commentModel.belongsTo(postsModel,{foreignKey:'textId',targetKey:'id'});


module.exports = {

    posts, 
    comments,
    postsModel,
    commentModel,
    dataBase: sequelize,

}