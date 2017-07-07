const coding = require('..');

// User
coding.user('willin').then((data) => {
  console.log(data);
});

// Public Projects
// type = 'joined' or 'stared'
coding.user.projects('willin', { page: 1, pageSize: 10, type: 'joined' }).then((data) => {
  console.log(data);
});

// Joined Topic
// extraInfo = 1 or 0
coding.user.topic('willin', { extraInfo: 1, page: 1, pageSize: 10 }).then((data) => {
  console.log(data);
});

// Public activities
// type = 'all' or 'project' or 'tweet'
coding.user.activities('willin', { type: 'all' }).then((data) => {
  console.log(data);
});
