'use strict';

var coding = require('../dist');

// User
coding.user('willin').then(function(data) {
  console.log(data);
});

// Public Projects
// type = 'joined' or 'stared'
coding.user.projects('willin', { page: 1, pageSize: 10, type: 'joined' }).then(function(data) {
  console.log(data);
});

// Joined Topic
// extraInfo = 1 or 0
coding.user.topic('willin', { extraInfo: 1, page: 1, pageSize: 10 }).then(function(data) {
  console.log(data);
});

// Public activities
// type = 'all' or 'project' or 'tweet'
coding.user.activities('willin', { type: 'all' }).then(function(data) {
  console.log(data);
});
