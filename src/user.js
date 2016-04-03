import { getAPI } from './_request';
const PREFIXUSER = 'https://coding.net/api/user/';

const user = async(username) => {
  const result = await getAPI(`${PREFIXUSER}key/${username}`);
  return result.data;
};

// type = 'joined' or 'stared'
user.projects = async(username, { page = 1, pageSize = 10, type = 'joined' } = {}) => {
  const result = await getAPI(`${PREFIXUSER}${username}/public_projects?page=${page}&pageSize=${pageSize}&type=${type}`);
  return result.data;
};

// extraInfo = 1 or 0
user.topic = async(username, { extraInfo = 1, page = 1, pageSize = 10 } = {}) => {
  const result = await getAPI(`${PREFIXUSER}${username}/tweet_topic/joined?extraInfo=${extraInfo}&page=${page}&pageSize=${pageSize}`);
  return result.data;
};

// type = 'all' or 'project' or 'tweet'
user.activities = async(username, { type = 'all' } = {}) => {
  const result = await getAPI(`${PREFIXUSER}${username}/activities_public?last_id=&type=${type}`);
  return result.data;
};

module.exports = user;
