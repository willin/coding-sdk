const { getAPI } = require('./_request');

const PREFIXTWEET = 'https://coding.net/api/tweet/';

// type = 'my' or 'liked' or 'commented'
const tweet = async (username, { type = 'my' } = {}) => {
  const result = await getAPI(`${PREFIXTWEET}user_public?global_key=${username}&last_id=999999999&type=${type}&user_id=0`);
  return result.data;
};

module.exports = tweet;
