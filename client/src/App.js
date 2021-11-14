//the order: index.js calls app.js and that's it. This is called JSX. It's a javascript extension. Javascript allows you to add HTML as part of this code which makes it extensible. Tha's how you do Single page applications which is why you have just one App.js. (CSS can be written separately but HTML and JS is mixed together in React.) JSX will have HTML embeeded in it. In Angular, all 4 components were separate for every component created...whereas React is ine one like this.

// Tell concurrently to run server, and then npm start preflix client and this will run both at the same time.

// App.js is a functional based component (dumb simple component) you use class base whenever you need it to be dynamic so we need to turn app.js to eventually a class based one:

import React, { Component } from 'react'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

export default class App extends Component {
  render() { // render is the last stage of the component, it will return the html you want to display. You can add more logic than a functional component (more than the code below)
    return (

      <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
}

export default App;
