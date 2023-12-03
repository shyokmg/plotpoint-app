const { User } = require('../models');

const userData = [
    {
        first_name: 'Margaret',
        last_name: 'Bucket',
        username: 'OldMarge',
        email: 'marge@aol.com',
        password: '$2b$10$T7245Du1hc7Nd1VmJDzV/OGufy.D/8csyAq9g0GiCK/j2GvSVosW.',
        club_id: 1,
    },
    {
        first_name: 'Steven',
        last_name: 'Hawking',
        username: 'shawk',
        email: 'hawking@phyics.com',
        password: '$2b$10$T7245Du1hc7Nd1VmJDzV/OGufy.D/8csyAq9g0GiCK/j2GvSVosW.',
        club_id: 2,
    },
    {
        first_name: 'Hermione',
        last_name: 'Granger',
        username: 'mugglegirl',
        email: 'hgranger@hogwarts.com',
        password: '$2b$10$T7245Du1hc7Nd1VmJDzV/OGufy.D/8csyAq9g0GiCK/j2GvSVosW.',
        club_id: 3,
    },
    {
        first_name: 'Neil',
        last_name: 'Armstrong',
        username: 'spaceboy',
        email: 'spaceboy@nasa.com',
        password: '$2b$10$T7245Du1hc7Nd1VmJDzV/OGufy.D/8csyAq9g0GiCK/j2GvSVosW.',
        club_id: 2,
    },
    
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;