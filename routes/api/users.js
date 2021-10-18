const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// query the database with the Users from model and see if there's a user in the database already created. In order to query the database, you need a model which is User = require('../../models/User)

// we called only express.Router because Express is super big and adding Router gets me exactly what I want.

// @route GET /api/users/register
// @desc Register a user
// @access Public
// (on every route, do this commenting practice for colleagues and team memebers)
router.get('/register', (req, res) => {
  User.fineOne({email: req.body.email})
//findOne means find at least 1 record to prevent the same users to register twice. This is how you perform a query.

});

// if the users path works we will see Users work print

module.exports = router;

// all communications to Json should be in form of json

