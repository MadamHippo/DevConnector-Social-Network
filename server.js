const express = require('express'); //importing library to use
const app = express(); // creating an instance of Express and naming it app

//you have to say what request (got or post)
//user came to the homepage and express will send a hello back
app.get('/', (req, res) => res.send('Hello'));

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`) );
//you're asking Express to listen at the port for a callback
//if successful you will have Express print on the screen server is running ...


