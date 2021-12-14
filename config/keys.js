if(process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod')
} else {
  module.exports = require('./keys_dev');
}


// module = small functionality. You want modules so it's not all in one JS file. Break into smaller JS files (like personal info).
// you have to state export in order for the file to be exported. If you don't put the statement then you can't use it outside of this particular file location.
// check this file into gitignore


// secretkey is bought in as keys in users.js


// You are essetenially writing a file that doesn't compromise security but still has this code so the code would actually compile. We need to check in our keys in order for it to compile.

// Now in all other files, we're referring to key.js! not keys_dev or keys_prod...so now our keys.js will only have code that says if we run on prod or dev, run those files accordingly

