'use strict';

const { app } = require('../server');

const supertest = require('supertest');


const req = supertest(app);

describe('Testing CRUD at post', () => {

    it('test getting all posts ', async () => {
        let res = await req.get('/post');
        expect(typeof res.body).toEqual('object');
    });


    it('test getting one post ', async () => {
        let res = await req.get('/post/1');
        expect(typeof res.body).toEqual('object');
    });


    it('test posting one post', async () => {
        const data = {
            title: 'test title',
            content: 'test content'
        }
        let res = await req.post('/post').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(201);

    });


    it('test update one post', async () => {
        const data = {
            title: 'test title',
            content: 'test content'
        }
        let res = await req.put('/post/12').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(202);
    });


    it('test delete one post', async () => {
        let res = await req.delete('/post/10');
        expect(res.statusCode).toBe(204);
    });

});


describe('Testing CRUD at comments', () => {

    it('test getting all comments ', async () => {
        let res = await req.get('/comment');
        expect(typeof res.body).toEqual('object');
    });


    it('test getting one comment ', async () => {
        let res = await req.get('/comment/1');
        expect(typeof res.body).toEqual('object');
    });


    it('test posting one comment', async () => {
        const data = {
            text: 'test title',
            textId: 2
        }
        let res = await req.post('/comment/2').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(201);

    });



});