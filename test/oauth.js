const test = require('ava');
const SDK = require('..');

const coding = new SDK();
coding.set({
  clientId: 'xxx',
  clientSecret: 'xxx',
  callback: 'xxx'
});

test('oauth get', async (t) => {
  const { data } = await coding.get('user/key/willin');
  t.is(data.code, 0);
});

test('oauth url', async (t) => {
  t.is(coding.url(), 'https://coding.net/oauth_authorize.html?client_id=xxx&redirect_uri=xxx&response_type=code&scope=user%2Cuser%3Aemail%2Cnotification%2Csocial%2Csocial%3Atweet%2Csocial%3Amessage%2Cproject%2Cproject%3Amembers%2Cproject%3Atask%2Cproject%3Afile%2Cproject%3Adepot%2Cproject%3Akey%2Cteam');
});


test('oauth access_token', async (t) => {
  const { data } = await coding.get('oauth/access_token', {
    grantType: 'authorization_code',
    code: 'xxxxxx'
  });
  t.is(data.code, 3002);
});

test('oauth post', async (t) => {
  const { data } = await coding.post('social/tweet', {
    content: 'test api'
  });
  t.is(data.code, 1000);
});

test('oauth delete', async (t) => {
  const { data } = await coding.delete('user/XXX/project/XXX/task/111');
  t.is(data.code, 1000);
});

test('oauth delete', async (t) => {
  const { data } = await coding.delete('user/XXX/project/XXX/task/111');
  t.is(data.code, 1000);
});

test('oauth put', async (t) => {
  coding.set({
    accessToken: 'test',
    refresh_token: 'test'
  });
  const { data } = await coding.put('project', {
    id: 1,
    name: 'test',
    description: 'test'
  });
  t.is(data.code, 1000);
});

