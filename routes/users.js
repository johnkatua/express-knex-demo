const express = require('express');
const knex = require('../config/knex');
const usersRouter = express.Router();

usersRouter.route('/users')
  .get(async (req, res) => {
    const users = await knex
      .select('first_name', 'last_name', 'age', 'position')
      .from('users')
    res.json({ users });
  });

module.exports = usersRouter;