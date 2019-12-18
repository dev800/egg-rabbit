# egg-rabbit

<<<<<<< HEAD
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rabbit.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rabbit
[travis-image]: https://img.shields.io/travis/eggjs/egg-rabbit.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rabbit
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rabbit.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rabbit?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rabbit.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rabbit
[snyk-image]: https://snyk.io/test/npm/egg-rabbit/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rabbit
[download-image]: https://img.shields.io/npm/dm/egg-rabbit.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rabbit

<!--
Description here.
-->

## Install

```bash
$ npm i egg-rabbit --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rabbit = {
  enable: true,
  package: 'egg-rabbit',
};
```

## Configuration
- default client config
```js
// {app_root}/config/config.default.js
exports.rabbit = {
};
```
- only one rabbitMQ client
```js
// {app_root}/config/config.default.js
exports.rabbit = {
};
```
- more rabbitMQ clients
```js
// {app_root}/config/config.default.js
exports.rabbit = {
};
```
- other optional configuration 
```js
// {app_root}/config/config.default.js
exports.rabbit = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.
**注意：**

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
=======
#### 介绍
基于amqplib模块提供一套关于Egg框架下操作RabbitMQ的插件，支持多消息队列实例，支持同步操作消息队列，在满足amqplib原有方法基础上，较好的解决Egg项目使用RabbitMQ消息队列痛点。

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 码云特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5.  码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
>>>>>>> 42a589b9b8de58482ec0f162b6b1b380d74dc5bd
