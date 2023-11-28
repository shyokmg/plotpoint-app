const seed = require('./seeders/db-seeder');

// Execute seed function
seed()
  .then(() => console.log('Database seeded successfully'))
  .catch(err => console.error('Error seeding database:', err));
