'use strict';

var coding = require('../dist');

// Tweet
// type = 'my' or 'liked' or 'commented'
coding.tweet('willin', { type: 'my' }).then(function(result) {
  console.log(result);
});
