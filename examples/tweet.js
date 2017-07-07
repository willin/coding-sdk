const coding = require('..');

// Tweet
// type = 'my' or 'liked' or 'commented'
coding.tweet('willin', { type: 'my' }).then((result) => {
  console.log(result);
});
