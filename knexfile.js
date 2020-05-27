require("dotenv").config();
// Update with your config settings.

module.exports = {
  development: {
      client: 'pg',
      connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: '0511',
          database: 'postgres',
      },
      migrations: {
          directory:'./src/database/migrations',
      },
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory:'./src/database/migrations',
      },
  },
};