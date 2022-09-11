const supertest = require('supertest');
const {app} = require('../server');


const request = supertest(app);

describe('Testing the server',()=>{

    it('Testing Main Route', async ()=>{

        let response = await request.get('/');
        expect(response.text).toEqual('at the main page');
    })
})