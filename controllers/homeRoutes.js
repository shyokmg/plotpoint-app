const router = require('express').Router();
const { Club, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Clubs and JOIN with user data
    const ClubData = await Club.findAll({
      include: [
        {
          model: User,
          attributes: ['club'],
        },
      ],
    });

    // Serialize data so the template can read it
    const Clubs = ClubData.map((Club) => Club.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      Clubs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Club/:id', async (req, res) => {
  try {
    const ClubData = await Club.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const Club = ClubData.get({ plain: true });

    res.render('Club', {
      ...Club,
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
      include: [{ model: Club }],
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
