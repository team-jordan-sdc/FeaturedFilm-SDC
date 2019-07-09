const request = require('supertest');
const app = require('../server/index');

describe('test root path', () => {
  test('it should respond with status code 200', () => {
    return request(app).get('/').expect(200);
  });
});

describe('test featured item get request', () => {
  test('it should be one object with status code 200', async () => {
    const response = await request(app).get('/api/featured');
    expect(response.body.length).toBe(1);
    expect(typeof response.body[0].title).toBe('string');
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0].title).not.toBeUndefined();
    expect(response.statusCode).toBe(200);
  });
});

describe('test rate post request', () => {
  test('it should respond with status code 200', () => {
    return request(app).post('/api/rate').expect(200);
  });
});

describe('test wishlist post request', () => {
  test('it should respond with status code 200', () => {
    return request(app).post('/api/wishlist').expect(200);
  });
});
