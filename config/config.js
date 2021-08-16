require('dotenv').config()

module.exports = {
  "development": {
    "user": process.env.DB_Username,
    "password": process.env.DB_Password,
    "database": process.env.DB_Database,
    "host": process.env.DB_Host,
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
    "user": process.env.Prod_Username,
    "password": process.env.Prod_Password,
    "database": process.env.Prod_Hatabase,
    "host": process.env.Prod_Host,
    "dialect": "mysql"
  }
}

