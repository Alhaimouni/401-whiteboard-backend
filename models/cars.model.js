'use strict';

function createCarsTable(dataBase, DataType) {

    return dataBase.define('Cars', {

        Name : { type: DataType.STRING, allowNull: false },
        Model: { type: DataType.INTEGER, allowNull: false },
        isAvalable: { type: DataType.BOOLEAN, defaultValue: true },

    });

}


module.exports = { createCarsTable };