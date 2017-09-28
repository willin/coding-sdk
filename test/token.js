const test = require('ava');
const SDK = require('..');

const token = process.env.CODING_TOKEN;

const coding = new SDK({
  user: 'willin',
  token
});

test('token get', async (t) => {
  const { data } = await coding.get('user/key/willin');
  t.is(data.code, 0);
});
