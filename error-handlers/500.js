'use strict'; 


function errHandler(err,req,res,next) {

    res.status(500).send({
        code : 500,
        Message : `${err}`
    })
}



module.exports = {errHandler};