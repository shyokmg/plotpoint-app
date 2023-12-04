const { Club } = require('../models');

const clubData = [
    {
        club_name: 'Old Margarets Gals',
    },
    {
        club_name: 'The Space Dreamers',
    },
    {
        club_name: 'The Muggles',
    },
];

const seedClubs = () => Club.bulkCreate(clubData);
module.exports = seedClubs;