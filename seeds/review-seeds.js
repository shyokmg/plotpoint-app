const { Review } = require('../models');

const reviewData = [
    {
        review_text: 'Another classic here girls',
        book_rating: 5,
        user_id: 1,
        book_id: 1,
    },
    {
        review_text: 'Neil Degrasse Tyson is Awesome',
        book_rating: 4,
        user_id: 2,
        book_id: 2,
    },
    {
        review_text: 'World of magic is a wonderful place',
        book_rating: 3,
        user_id: 3,
        book_id: 3,
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);
module.exports = seedReviews;