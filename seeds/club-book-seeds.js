const { ClubBook } = require('../models');

const clubBookData = [
    {
        book_id: 1,
        club_id: 1,
    },
    {
        book_id: 2,
        club_id: 2,
    },
    {
        book_id: 3,
        club_id: 3,
    },
    {
        book_id: 4,
        club_id: 2,
    }
];

const seedClubBooks = () => ClubBook.bulkCreate(clubBookData);
module.exports = seedClubBooks;