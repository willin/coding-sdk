const lazyLoad = (service) => (() => require(`./${service}`))();
const list = ['user', 'tweet'];
list.forEach((item) => {
  exports[item] = lazyLoad(item);
});
