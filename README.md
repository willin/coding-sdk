# Coding SDK

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/coding-sdk.svg)](https://npmjs.org/package/coding-sdk) [![npm](https://img.shields.io/npm/dt/coding-sdk.svg)](https://npmjs.org/package/coding-sdk) [![codecov](https://codecov.io/gh/willin/coding-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/willin/coding-sdk) [![Travis-CI](https://travis-ci.org/willin/coding-sdk.svg?branch=master)](https://travis-ci.org/willin/coding-sdk) [![codebeat badge](https://codebeat.co/badges/d5086648-bfd1-422a-a89f-d8cb76590433)](https://codebeat.co/projects/github-com-willin-coding-sdk-master)

> 已经疯狂得不能用代码行数（总计`56`行，包含空行和debug）来衡量该项目了，代码仅有 `1,375`字节（净化后）。

五十六个民族五十六朵花。啦啦啦~

[TOC]

## 安装

```bash
yarn add coding-sdk
# or npm i -S coding-sdk
```

本项目中使用 `camelCase` 驼峰命名法则。


## Scope 说明

scope 参数应传入数组如： `['user', 'project', 'team']`

scope 名称 | 说明 | 授权
:--| -- | :--:
user | 授权获取用户信息（用户名称，头像，tag，email，动态 ） | 读
user:email | 授权获取用户的email ） | 读
notification | 授权读取通知信息，包含email通知 | 读写
social | 授权读取冒泡列表，好友列表 | 读
social:tweet | 授权发送冒泡，冒泡操作（点赞、评论、删除） | 读写
social:message | 授权读取、发送私信、私信语音 | 读写
project | 授权项目信息、项目列表，仓库信息，公钥列表、成员，任务列表 | 读
project:members | 授权项目管理者增、删、改项目成员，退出项目 | 读写
project:task | 授权任务操作，包含增、删、改 | 读写
project:file | 授权文件，包含增、删、改 | 读写
project:depot | 获取 commit 信息，分支操作，MR/PR, LineNotes, fork, webhook 等操作 | 读写
project:key | 授权操作部署公钥、个人公钥 | 读写
team | 获取团队相关基本信息 | 读

## Oauth 使用 示例

```js
const SDK = require('coding-sdk');
// 初始化实例：
const coding = new SDK({
  clientId: 'xxx',
  clientSecret: 'xxx',
  callback: 'http://localhost/coding/callback'
});

// 获取 OAuth 鉴权链接 URL
console.log(coding.url());
// 如： https://coding.net/oauth_authorize.html?client_id=xxx&redirect_uri=xxx&response_type=code&scope=user
// 登录后跳转回 callback URL，获取其中的 code 字段

// 注意包裹在 async 内， 或者用 Promise.then(res=>{ console.log(res.data) }) 来获取返回 json 结果
const { data } = await coding.get('oauth/access_token', {
  grant_type: 'authorization_code',
  code: 'xxxxxx'
});
/*
{ access_token: 'xxxxx',
  refresh_token: 'xxxxx',
  expires_in: '864000' }
*/
```

## Token 使用 示例

```js
const coding = new SDK({
  user: 'willin',
  token: 'xxxxxx'
});

const { data } = await coding.delete('user/XXX/project/XXX/task/XXX');
/*
{ code: 0, data: true }
*/
```

## 一些公开接口 使用 示例

```js
const coding = new SDK();

const { data } = await coding.get('user/key/willin')
/*
{
  code: 0,
  data: { ... }
}
*/
```

## 补充示例

### 获取 OAuth 登录地址

```js
coding.url();
```

### 获取 access_token

```js
const data = await coding.get('oauth/access_token', {
  grantType: 'authorization_code',
  code: 'xxxxxx'
}).then(res=>res.data);
/*
返回数据格式:
{
  access_token: "xxxxxxx",
  refresh_token: "xxxxxx",
  expires_in: "86382817"
}
*/
```

## License

Apache 2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
