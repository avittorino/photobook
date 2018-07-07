const router = require('express').Router();

const posts = require('./posts/routes');

router.use('/post', posts);

module.exports = router;
