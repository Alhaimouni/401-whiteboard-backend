'use strict';


const createPostsTable = (dataBase, DataType) => dataBase.define('posts', {

    title: { type: DataType.STRING, allowNull: false },
    content: { type: DataType.STRING, defaultValue: 'Good Data' },

});


// ask if it will work like that ???
// function createPostsTable(dataBase, DataType) {

//     return dataBase.define('posts', {

//         title: { type: DataType.STRING, allowNull: true },
//         content: { type: DataType.STRING, defaultValue: 'Good Data' },

//     });

// }


module.exports = { createPostsTable };