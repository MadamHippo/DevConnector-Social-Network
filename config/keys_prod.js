// For production purposes:

module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
}

// Whenever you get a virtual machine in the cloud, these machines lets you have environment variables that only you have access to. These things are secret as environment variable and it's not saved in Javascript and no one will see it. If you want to access these env variables, you need to create them like above ^ 

// Give the envirnoment variable a name when you create it, so process.env.MONGO_URI which means when you create the variable in production, this env variable will contain this connection string so read the string.

// Another environment variable is SECRET_OR_KEY, we created another envir variable called Secret or key on the machine that contains the secret key.

// You are essetenially writing a file that doesn't compromise security but still has this code so the code would actually compile. We need to check in our keys in order for it to compile.

// Now in all other files, we're referring to key.js! not keys_dev or keys_prod...so now our keys.js will only have code that says if we run on prod or dev, run those files accordingly