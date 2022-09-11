'use strict';

const {app} = require('../server');

const supertest = require('supertest');

const req = supertest(app);

describe('Testing CRUD', () => {

     it('test getting all posts in array of objects',async () => {
        let res = await req.get('/post');
        expect(typeof res.body).toEqual('object');
     });


     it('test getting one post ',async () => {
        let res = await req.get('/post/1');
        expect(typeof res.body).toEqual('object');
     });


     it('test posting one post',async () => {
        const data = {
            title:'face book',
            content:'facebook has many bugs'
        }
        let res = await req.post('/post').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(201);

     });


     it('test update one post',async () => {
        const data = {
            title:'dahab',
            content:'dahab has received many tourist last year'
        }
        let res = await req.put('/post/12').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(202);
     });


     it('test delete one post',async () => {
        let res = await req.delete('/post/10');
        expect(res.statusCode).toBe(204);
     });


});