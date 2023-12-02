const router = require('express').Router();
const { restart } = require('nodemon');
const { Club, User, Book, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    try {
      // const clubData = await Club.findAll();
      const clubId = req.session.club_id;
      const clubData = await Club.findByPk(clubId);
      const memberData = await User.findAll({where: {club_id: clubId} });
      const bookData = await Book.findAll({where: {club_id: clubId} })
      // const clubData = await Club.findOne({ where: { id: req.session.club_id } });
  
      // // Serialize data so the template can read it
      const club = clubData.get({ plain: true });
      const members = memberData.map((member) => member.get({ plain: true }));
      const books = bookData.map((book) => book.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('homepage', { 
        club,
        members, 
        books,
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
  try {
    const bookData = await Book.findByPk(req.params.id);
    // const reviewData = await Review.findAll({where: {book_id: req.params.id} }, {include:[{model: User, attributes: ['first_name']}]});
    const reviewData = await Review.findAll({
      where: { book_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['first_name'],
        },
      ],
    });

    const book = bookData.get({ plain: true });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.render('books', {
      book,
      reviews,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
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

  // try {
  //   // Get all clubs and JOIN with user data
  //   const clubData = await Club.findAll();

  //   // Serialize data so the template can read it
  //   const clubs = clubData.map((club) => club.get({ plain: true }));

  //   res.render('login', {clubs});
  // } catch (err) {
  //   res.status(500).json(err);
  // }

});


router.get('/signup', async (req, res) => {
  // // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

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
module.exports = router;
