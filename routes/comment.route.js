'use strict';

const express = require('express');
const { comments, postsModel, commentModel, usersModel } = require('../models/index');
const router = express.Router();


router.post('/comment/:postId/:userID', addComment);
router.get('/comment', getAllComments);
router.get('/comment/:id', gitOneComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);



// async function addComment(req, res) {
//     const { postId, userID } = req.params;
//     const obj = {
//         text: req.body.text,
//         textId: postId,
//         userId: userID
//     }
//     await commentModel.create(obj);
//     let commentsForId = await commentModel.findAll({ where: { textId: postId } })
//     res.status(201).send(commentsForId);
// };

async function addComment(req, res) {
    const { postId, userID } = req.params;
    const obj = {
        text: req.body.text,
        textId: postId,
        userId: userID
    }
    await commentModel.create(obj);
    let commentsForId = await commentModel.findAll({ where: { textId: postId }, include: [usersModel, postsModel] })
    res.status(201).send(commentsForId);
};



async function getAllComments(req, res) {
    res.status(200).send(await comments.getFrom());
};
async function gitOneComment(req, res) {
    res.status(200).send(await comments.getFrom(req.params.id));
};
async function updateComment(req, res) {
    res.status(202).send(await comments.updateAt(req.body, req.params.id));
};
async function deleteComment(req, res) {
    await comments.deleteFrom(req.params.id)
    res.status(204).end();
};


module.exports = router;
