const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  
  if (!Validator.isLength(data.name, {min: 2, max:30})){
    errors.name = 'Name must be between 2 and 30 characters';
  }

  //validator is a built in library I added to javascript
  //check the name length}

// check if name is empty or not

// the order of your error.name is important because they will overwrite each other
// you shouldn't do elif because you need to check both length and empty

if (isEmpty(data.name)){
  errors.name = 'Name field is required';   
}

// email

if (isEmpty(data.email)){
  errors.email = 'Email field is required';
}

if (!Validator.isEmail(data.email)){
  errors.email = 'Email is invalid';
}


// password (same as name check)

if (!Validator.isLength(data.password, {min: 6, max:30})){
  errors.password = 'Password must be between 6 and 30 characters';
}

if (isEmpty(data.password)){
  errors.password = 'Password field is required';   
}

if (isEmpty(data.password2)){
  errors.password2 = 'Confirm Password field is required';   
}

if (!Validator.equals(data.password, data.password2)){
  errors.password2 = 'Passwords must match';      
}

  return {
    errors,
    isValid: isEmpty(errors)
  }

}