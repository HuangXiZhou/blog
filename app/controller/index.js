'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    await this.ctx.render('index.tpl');
    this.ctx.status = 200;
  }
}

module.exports = IndexController;
