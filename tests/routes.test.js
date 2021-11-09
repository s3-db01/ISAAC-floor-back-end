const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../server');

describe('Post Endpoints', () => {
    it('Should create a new floor', async () => {
        const res = await request(app)
        .post('/api/floors')
        .send({
            "floor_number": 43,
            "max_x_coordinate": 4,
            "max_y_coordinate": 20
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('id')
    })
})

describe('Get Endpoints', () => {
    it('Should get a floor with id 1', async () => {
        const res = await request(app)
        .get('/api/floors/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
    })
})

describe('Put Endpoints', () =>{
    it('Should update a floor with id 1', async () => {
        const res = await request(app)
        .put('/api/floors/1')
        .send({
            "floor_number": 52
        })
        expect(res.statusCode).toEqual(200)
    })
})

describe('Delete Endpoints', () =>{
    it('Should delete a floor with id 1', async () =>{
        const res = await request(app)
        .delete('/api/floors/1')
        expect(res.statusCode).toEqual(200)
    })

    it('Should delete all floors', async () =>{
        const res = await request(app)
        .delete('/api/floors')
        expect(res.statusCode).toEqual(200)
    })
})

afterAll(done => {
    app.close();
    done();
});