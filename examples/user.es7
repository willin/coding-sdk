import coding from '../src';

// User
(async ()=>{
  const user = await coding.user('willin');
  console.log(user);
})();

// Public Projects
(async()=>{
  // type = 'joined' or 'stared'
  const projects = await coding.user.projects('willin', { page: 1, pageSize: 10, type: 'joined' });
  console.log(projects);
})();

// Joined Topic
(async()=>{
  // extraInfo = 1 or 0
  const topic = await coding.user.topic('willin', { extraInfo: 1, page: 1, pageSize: 10 });
  console.log(topic);
})();

// Public activities
(async()=>{
  // type = 'all' or 'project' or 'tweet'
  const activities = await coding.user.activities('willin', { type: 'all' });
  console.log(activities);
})();
