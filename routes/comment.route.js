'use strict';

const express = require('express');
const { comments } = require('../models');
const router = express.Router();


router.post('/comment', addComment);
router.get('/comment', getAllComments);
router.get('/comment/:id', gitOneComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);



async function addComment(req, res) {
    res.status(201).send(await comments.addOn(req.body));
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
