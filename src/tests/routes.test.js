const test = require('tape');
const request = require('supertest');
const app = require('../app.js');

test('All routes should return the expected results', t => {
  request(app)
    .get('/content/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});


