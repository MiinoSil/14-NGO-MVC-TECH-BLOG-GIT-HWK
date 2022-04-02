const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const postsRoutes = require('./postsRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogs', blogRoutes);
router.use('/posts', postsRoutes);
router.use('/users', userRoutes);

module.exports = router;