const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// query the database with the Users from model and see if there's a user in the database already created. In order to query the database, you need a model which is User = require('../../models/User)
//brought in bcrypt password hash

// we called only express.Router because Express is super big and adding Router gets me exactly what I want.

// @route GET /api/users/register
// @desc Register a user
// @access Public
// (on every route, do this commenting practice for colleagues and team memebers)
router.get('/register', (req, res) => {
  User.fineOne({email: req.body.email})
//findOne means find at least 1 record to prevent the same users to register twice. This is how you perform a query.
    .then(user => {
      if (user){
        return res.status(400).json({email: 'Email already exists!'});
        // 400 means bad data, when you have an error, always add an error status to help client.
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // encrpyt password: there's 3 functions nested in each other. There's 4 functions in there.
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
        //callbacks are parameters, promise statements are attached as then and catch.

        // actually writing the above info into the actual database.

          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
          })
        })

      }

    })
    .catch(err => console.log('Error found!'));
// the .then and .catch has no idea what you're trying to do, all it knows is their own job. They only know if they finished their task or not.

});

// if the users path works we will see Users work print

module.exports = router;

// all communications to Json should be in form of json

