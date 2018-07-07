const router = require('express').Router();

const users = require('./users/routes');
const posts = require('./posts/routes');
const comments = require('./comments/routes');

router.use('/comments', comments);
router.use('/posts', posts);
router.use('/users', users);

module.exports = router;
