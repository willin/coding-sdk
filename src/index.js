const axios = require('axios');

const camel = (obj = {}) => Object.keys(obj).reduce((result, key) => {
  result[key === 'pageSize' ? key : key.replace(/([A-Z])/g, m => `_${m.toLowerCase()}`)] = obj[key]; // eslint-disable-line no-param-reassign
  return result;
}, {});

module.exports = class SDK {
  constructor(opts) {
    this.instance = axios.create({ baseURL: 'https://coding.net/api/', timeout: 5000 });
    this.opts = { type: 'oauth', scope: ['user', 'user:email', 'notification', 'social', 'social:tweet', 'social:message', 'project', 'project:members', 'project:task', 'project:file', 'project:depot', 'project:key', 'team'] };
    const obj = camel(opts);
    if (obj.user) {
      this.opts.type = 'token';
      this.instance.defaults.headers.common.Authorization = `Basic ${new Buffer(`${opts.user}:${opts.token}`).toString('base64')}`;
    }
    Object.assign(this.opts, obj);
  }
  set(opts) {
    Object.assign(this.opts, camel(opts));
  }
  request(method, url, params) {
    const data = method === 'get' ? {
      params
    } : {
      params: {},
      data: params
    };
    if (url.indexOf('oauth') === -1) {
      if (this.opts.access_token) {
        Object.assign(data.params, { access_token: this.opts.access_token });
      }
    } else {
      Object.assign(params, {
        client_id: this.opts.client_id,
        client_secret: this.opts.client_secret
      });
    }
    return this.instance[method](url, data);
  }
  get(url, params) {
    return this.request('get', url, camel(params));
  }
  post(url, params) {
    return this.request('post', url, camel(params));
  }
  delete(url, params) {
    return this.request('delete', url, camel(params));
  }
  put(url, params) {
    return this.request('put', url, camel(params));
  }
  url() {
    return `https://coding.net/oauth_authorize.html?client_id=${encodeURIComponent(this.opts.client_id)}&redirect_uri=${encodeURIComponent(this.opts.callback)}&response_type=code&scope=${encodeURIComponent(this.opts.scope.join(','))}`;
  }
};
