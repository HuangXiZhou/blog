'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/index.test.js', () => {
  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(200);
  });
});
