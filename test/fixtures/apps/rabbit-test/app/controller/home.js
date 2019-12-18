'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.rabbit.name;
  }
  // 生产者，仅仅单例使用
  async publish() {
    const { msg } = this.ctx.query;
    const ch = await this.app.rabbit.createChannel();
    await ch.assertQueue(this.app.config.rabbit.queueName, { durable: false });
    const ok = await ch.sendToQueue(this.app.config.rabbit.queueName, Buffer.from(msg));
    await ch.close();

    this.ctx.body = ok;
    this.ctx.status = 200;
  }

  async consume() {
    const ch = await this.app.rabbit.createChannel();
    await ch.assertQueue(this.app.config.rabbit.queueName, { durable: false });
    const msg = await new Promise(resolve => ch.consume(this.app.config.rabbit.queueName, msg => resolve(msg)));

    if (msg !== null) {
      ch.ack(msg);
      await ch.close();

      this.ctx.status = 200;
      this.ctx.body = { msg: msg.content.toString() };
    } else {
      this.ctx.status = 500;
    }
  }
}

module.exports = HomeController;
