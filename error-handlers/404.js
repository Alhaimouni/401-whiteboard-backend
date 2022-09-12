'use strict';

function notFoundHandler(req,res) {

    res.status(404).send({
        code : 404,
        Message : `Not Route found`
    })
}



module.exports = {notFoundHandler};