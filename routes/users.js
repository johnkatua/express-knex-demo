const express = require('express');
const knex = require('../config/knex');
const usersRouter = express.Router();

// get users first_name and age
usersRouter.route('/certainFields')
  .get(async (req, res) => {
    const users = await knex('users')
      .select('first_name', 'age')
    res.json({ users });
  });

// get age range 
usersRouter.route('/whereIn')
  .get(async (req, res) => {
    const users = await knex.schema.raw
      (`SELECT * FROM users WHERE age BETWEEN 34 and 45`)
    res.json({ users: users.rows });
  })

// get all users
usersRouter.route('/users')
  .get(async (req, res) => {
    const users = await knex('users')
    res.json({ users });
  });

// fetch data using aliases
usersRouter.route('/aliases')
  .get(async (req, res) => {
    const users = await knex('users')
      .select('first_name AS name')
    res.json({ users });
  });

// fetch distinct first_name from the database
usersRouter.route('/distinct')
  .get(async (req, res) => {
    const users = await knex('users')
      .distinct('first_name')
    res.json({ users });
  });

module.exports = usersRouter;