'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostsTable } = require('./post.model');
const { createCarsTable } = require('./cars.model');

require('dotenv').config();

/*

psql postgres
postgres=# create database firstdb;
\q

*/

// url = postgresql://malhaimouni@localhost:5432/firstdb

const POSTGRES_URL = process.env.HEROKU_POSTGRESQL_MAUVE_URL || process.env.DATABASE_URL ;

let sequelizeOptions = {

    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized: false
        }
    }
};

let sequelize = new Sequelize(POSTGRES_URL , sequelizeOptions);




module.exports = {

    dataBase: sequelize,  // for reel connection and will use in index.js

    posts: createPostsTable(sequelize, DataTypes), // for create the posts table and then use it in the routes.

    cars: createCarsTable(sequelize, DataTypes) // for creat the cars table and then use it in the routes.

}