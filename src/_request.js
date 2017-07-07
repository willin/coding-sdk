const request = require('request');

const getDefer = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

exports.getAPI = (url) => {
  const deferred = getDefer();
  request.get(url, (err, res) => {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve(JSON.parse(res.body));
  });
  return deferred.promise;
};
