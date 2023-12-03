const { Book } = require('../models');

const bookData = [
    {
        book_name: 'Then There Were None',
        author: 'Agatha Christie',
        description: 'Some people get murdered',
        genre: 'Detective',

    },
    {
        book_name: 'Astrophysics for people in a hurry',
        author: 'Neil De Grasse Tyson',
        description: 'All things astrophysics and space',
        genre: 'Science, Astrophysics',

    },
    {
        book_name: `Harry Potter and the Philosopher's stone`,
        author: 'J.K Rowling',
        description: `Harry Potter and friend's meet Voldemort when they find the Philosopher's stone...`,
        genre: 'Magic, Fantasy',
    },
    {
        book_name: 'A Brief History of Time',
        author: 'Stephen Hawking',
        description: 'Mind boggling journey through time and space',
        genre: 'Science, Astrophysics',

    },
];

const seedBooks = () => Book.bulkCreate(bookData);
module.exports = seedBooks;