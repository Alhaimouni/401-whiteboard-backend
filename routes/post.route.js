'use strict';

const express = require('express');
const { posts } = require('../models');
const router = express.Router();


router.post('/post', addPost);
router.get('/post', getAllPosts);
router.get('/post/:id', gitOnePost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


async function addPost(req, res) {
    let post = req.body;
    await posts.create(post);
    res.status(200).send('Done');
};
async function getAllPosts(req, res) {
    let allPosts = await posts.findAll();
    res.status(200).send(allPosts);

};
async function gitOnePost(req, res) {
    let postId = req.params.id;
    let post = await posts.findOne({ where: { id: postId } });
    res.status(200).send(post);
};
async function updatePost(req, res) {

    const postId = req.params.id;
    const newData = req.body;
    // const postForUpdate = await posts.findOne({where: {id: id}});
    // const updatedPost = await postForUpdate.update(newData);
    const updatedPost = await posts.update(newData, { where: { id: postId } });
    res.status(200).send(updatedPost);

};
async function deletePost(req, res) {
    const postId = req.params.id;
    await posts.destroy({ where: { id: postId } });
    res.status(204).json('Done');
};

module.exports = router;
