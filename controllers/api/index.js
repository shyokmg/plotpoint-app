const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const bookClubRoutes = require('./bookClubRoutes');
const bookReviewRoutes = require('./bookReviewRoutes')

router.use('/users', userRoutes);
router.use('books', bookRoutes);
router.use('/bookclubs', bookClubRoutes);
router.use('/bookreviews', bookReviewRoutes);

module.exports = router;