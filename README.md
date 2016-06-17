# Coding SDK for Node.js

![npm](https://img.shields.io/npm/v/coding-sdk.svg) ![npm](https://img.shields.io/npm/dm/coding-sdk.svg) ![npm](https://img.shields.io/npm/dt/coding-sdk.svg)

旧版（coding-net）

![npm](https://img.shields.io/npm/dt/coding-net.svg)



## 安装和引入

### 安装

```
npm install coding-sdk --save
```

### 引用
ES5:

```js
var coding = require('coding-sdk');
```

ES7:

```js
import coding from 'coding-sdk';
// 或
import { user, tweet } from 'coding-sdk';
```

## 使用说明
### coding.user('username') 用户信息
参数：
- username: 用户名（Global Key)，下文中如遇用户名，均相同。

ES5 Example：

```js
// User
coding.user('willin').then(function(data) {
  console.log(data);
});
```

ES7 Example：

```js
// User
(async ()=>{
  const user = await coding.user('willin');
  console.log(user);
})();
```

结果：

```js
{
  tags_str: 'Mac, Node.js, 极客, 技术风向标, 全栈攻城狮',
  tags: '9,12,31,32,38',
  job_str: '打杂',
  job: 6,
  sex: 0,
  birthday: '1989-06-03',
  location: '江苏 南京',
  company: '南京物联传感',
  slogan: 'To be Willin is to be willing.',
  introduction: '',
  avatar: 'https://dn-coding-net-production-static.qbox.me/e87b264d88631de777ecfe2abb602de6.jpg',
  gravatar: '',
  lavatar: 'https://dn-coding-net-production-static.qbox.me/e87b264d88631de777ecfe2abb602de6.jpg',
  created_at: 1413940756000,
  last_logined_at: 1459669263000,
  last_activity_at: 1459686053606,
  global_key: 'willin',
  name: 'willin',
  name_pinyin: '',
  updated_at: 1459669254000,
  path: '/u/willin',
  status: 1,
  is_member: 0,
  id: 36560,
  points_left: 0.54,
  follows_count: 1,
  fans_count: 2,
  tweets_count: 0,
  followed: false,
  follow: false
}
```

### coding.user.projects('username', options) 用户公开项目
参数：
- username: 用户名
- options:
  - page: 页码，默认`1`
  - pageSize: 每页条数，默认`10`
  - type: 类型，默认`joined`。 参与：`joined`，收藏：`stared`

### coding.user.topic('username', options) 用户参与话题
参数：
- username: 用户名
- options:
  - extraInfo: 附加信息，默认`1`
  - page: 页码，默认`1`
  - pageSize: 每页条数，默认`10`

### coding.user.activities('username', options) 用户公开动态
参数：
- username: 用户名
- options:
  - type: 类型，默认`all`。全部：`all`，项目相关：`project`，冒泡相关：`tweet`。

### coding.tweet('username', options) 冒泡
参数：
- username: 用户名
- options:
  - type: 类型，默认`my`。TA自己的：`my`，TA赞过的：`liked`，TA评论过的：`commented`。

## 示例
参考 `examples`目录。

```
// 安装babel-node
npm install -g babel-node
// 编译
npm run compile
// 执行
babel-node examples/user.js
// 或
babel-node examples/user.es7
babel-node examples/tweet.js
babel-node examples/tweet.es7
```


## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
