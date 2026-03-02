const request = require('supertest');
const app = require('../../src/main/server');

describe('Incident API', () => {

    test('GET /incidents should return empty array', async () => {
        const response = await request(app).get('/incidents');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

});