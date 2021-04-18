const express = require('express');
const knex = require('../config/knex');
const usersRouter = express.Router();

// get users first_name and age
usersRouter.route('/users')
  .get(async (req, res) => {
    const users = await knex
      .select('first_name', 'age')
      .from('users')
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
usersRouter.route('/all')
  .get(async (req, res) => {
    const users = await knex('users')
    res.json({ users });
  })

module.exports = usersRouter;