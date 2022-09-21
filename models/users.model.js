'use strict';

function createUsersTable(sequelize, dataTypes) {
    return (
        sequelize.define('users', {
            userName : {type:dataTypes.STRING,allowNull:false,unique:true},
            email : {type:dataTypes.STRING,allowNull:false,unique:true,isEmail:true},
            passWord : {type:dataTypes.STRING,allowNull:false},
            token : {type:dataTypes.VIRTUAL},
        })
    );
}



module.exports = {createUsersTable};