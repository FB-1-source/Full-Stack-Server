require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_username,
    "password": process.env.DB_password,
    "database": process.env.DB_database,
    "host": process.env.DB_host,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.Prod_username,
    "password": process.env.Prod_password,
    "database": process.env.Prod_database,
    "host": process.env.Prod_host,
    "dialect": "mysql"
  }
}