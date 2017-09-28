const test = require('ava');
const SDK = require('..');

const coding = new SDK();

test('public get', async (t) => {
  const { data } = await coding.get('user/key/willin');
  t.is(data.code, 0);
});

