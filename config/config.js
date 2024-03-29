require('dotenv').config(); //When migrating include following in config(): {path: '../.env'}
module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
    },
    // test: {
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE_TEST,
    //   host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
    //   dialect: process.env.DB_DIALECT,
    //   },
    test: {
      username: "root",
      password: "isaac",
      database: "isaac",
      host:"localhost",
      port: "3306",
      dialect: "mysql",
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
};