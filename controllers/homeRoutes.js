const router = require('express').Router();
const { restart } = require('nodemon');
const { Club, User, ClubBook, Book, Review } = require('../models');
const withAuth = require('../utils/auth');
const helpers = require('../utils/helpers');

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const clubId = req.session.club_id;
      const clubData = await Club.findByPk(clubId);
      const memberData = await User.findAll({where: {club_id: clubId} });

      const bookData = await Book.findAll({
        include: [
          {
            model: Club, through: ClubBook, as: 'clubs', where: { id: clubId },
          },
        ],

      });
      const bookIds = bookData.map((book) => book.id);
      const randomNumber = helpers.get_number(bookIds);
      const bookWeekData = await Book.findByPk(randomNumber);
      // // Serialize data so the template can read it
      const club = clubData.get({ plain: true });
      const members = memberData.map((member) => member.get({ plain: true }));
      const club_books = bookData.map((club_book) => club_book.get({ plain: true }));
      
      // Hard code book of the week
      const book_week = bookWeekData.get({plain: true});
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        club,
        members,
        book_week,
        club_books,
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.redirect('/login');
    return;
  }

  
});

router.get('/book/:id', async (req, res) => {
  if (req.session.logged_in) {
    try {
      // Get Book details data based on book id
      const bookData = await Book.findByPk(req.params.id);
      // Get all Reviews based on book id and include user who posted the review
      const reviewData = await Review.findAll({
        where: { book_id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
        ],
      });
  
      const book = bookData.get({ plain: true });
      const reviews = reviewData.map((review) => review.get({ plain: true }));

      // Store the bookId in the session
      req.session.book_id = req.params.id;

      res.render('books', {
        book,
        reviews,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.redirect('/login');
    return;
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: club }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');

});


router.get('/signup', async (req, res) => {
  try {
    // Get all clubs and JOIN with user data
    const clubData = await Club.findAll();

    // Serialize data so the template can read it
    const clubs = clubData.map((club) => club.get({ plain: true }));

    res.render('signup', {clubs});
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/review', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('review', {
      logged_in: req.session.logged_in
    });

  } else {
    res.redirect('/login');
    return;
  }


});

module.exports = router;
