const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('case test', function() {
  after(function() {
    server.close();
  });

  it('/hello should say "哈囉"', function(done) {
    request
    .get('/hello')
    .expect(200)
    .expect('哈囉', done);
  });
  it('/name should say "劉鳳安"', function(done) {
    request
    .get('/name')
    .expect(200)
    .expect('劉鳳安', done);
  });
  it('/id should say "110510502"', function(done) {
    request
    .get('/id')
    .expect(200)
    .expect('110510502', done);
  });
  it('/xxx/yyy/ should status = 404', function(done) {
    request
      .get('/xxx/yyy/')
      .expect(404, done)
  });
});