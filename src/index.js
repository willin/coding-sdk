/* eslint import/no-dynamic-require:0, global-require: 0*/
const lazyLoad = service => (() => require(`./${service}`))();

const list = ['user', 'tweet'];
list.forEach((item) => {
  exports[item] = lazyLoad(item);
});
