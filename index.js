'use strict';

require('dotenv').config();
const { start } = require('./server');
const { dataBase } = require('./models/index');



//starting the server after checking the database connection.

dataBase.sync()
.then(()=>{start(process.env.PORT)})
.catch((err)=>{console.log(err)});
