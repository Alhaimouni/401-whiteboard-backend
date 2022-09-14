'use strict';

function createCommentTable(dataBase, DataType) {

    return dataBase.define('comment', {

        text: { type: DataType.STRING, allowNull: false },
        textId: { type: DataType.INTEGER, allowNull: false },

    });

}


module.exports = { createCommentTable };