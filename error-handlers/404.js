'use strict';

function notFoundHandler(req,res) {

    res.send({
        code : 404,
        Message : `Not Route found`
    })
}



module.exports = {notFoundHandler};