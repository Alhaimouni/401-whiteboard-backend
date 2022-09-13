'use strict';

function createCommentTable(dataBase, DataType) {

    return dataBase.define('comment', {

        text: { type: DataType.STRING, allowNull: false },

    });

}


module.exports = { createCommentTable };