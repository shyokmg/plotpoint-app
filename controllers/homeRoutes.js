const router = require('express').Router();
const { restart } = require('nodemon');
const { Club, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all clubs and JOIN with user data
    const clubData = await Club.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const clubs = clubData.map((club) => club.get({ plain: true }));

    // res.json(Clubs);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      clubs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/club/:id', async (req, res) => {
  try {
    const clubData = await club.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const club = clubData.get({ plain: true });

    res.render('club', {
      ...club,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: club }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  // const clubs = clubData.map((club) => club.get({ plain: true }));
  // res.render('login', {clubs});

  try {
    // Get all clubs and JOIN with user data
    const clubData = await Club.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const clubs = clubData.map((club) => club.get({ plain: true }));

    res.render('login', {clubs});
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
