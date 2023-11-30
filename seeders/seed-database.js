//const seed = require('./seeders/db-seeder');

// Execute seed function
//seed()
//  .then(() => console.log('Database seeded successfully'))
//  .catch(err => console.error('Error seeding database:', err));

const sequelize = require('../config/connection'); 
const seed = require('./db-seeder');

const resetAndSeedDatabase = async () => {
  try {
    // Drop and recreate tables
    await sequelize.sync({ force: true });
    console.log('Tables dropped and re-created.');

    // Execute seed function
    await seed();
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error during database reset and seeding:', err);
  }
};

resetAndSeedDatabase();
