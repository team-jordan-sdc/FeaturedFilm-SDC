const request = require('supertest');
const app = require('./index');

describe('test root path', () => {
  test('it should respond with status code 200', () => {
    return request(app).get('/').expect(200);
  });
});

describe('test featured item get request', ()=> {
  test('it should respond with status code 200', () => {
    return request(app).get('/api/featured').expect(200);
  });
});

describe('test rate post request', ()=> {
  test('it should respond with status code 200', () => {
    return request(app).post('/api/rate').expect(200);
  });
});

describe('test wishlist post request', ()=> {
  test('it should respond with status code 200', () => {
    return request(app).post('/api/wishlist').expect(200);
  });
})