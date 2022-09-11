'use strict'; 


function errHandler(err,req,res,next) {

    res.send({
        code : 500,
        Message : `${err}`
    })
}



module.exports = {errHandler};