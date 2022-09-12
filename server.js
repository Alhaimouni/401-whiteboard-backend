'use strict';

const express = require('express');
const cors = require('cors');
const postsRouters = require('./routes/post.route');
const { errHandler } = require('./error-handlers/500');
const { notFoundHandler } = require('./error-handlers/404');
const app = express();

app.use(cors());
app.use(express.json());
app.use(postsRouters);

function handleMain(req,res) {
    res.status(200).send('at the main page')
}
function start(port) {
    app.listen(port, () => console.log(`Server is up and running at ${port}`));
};

app.get('/',handleMain);


app.use('*',notFoundHandler);
app.use(errHandler);

module.exports = { start, app };