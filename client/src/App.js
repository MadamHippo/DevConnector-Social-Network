//the order: index.js calls app.js and that's it. This is called JSX. It's a javascript extension. Javascript allows you to add HTML as part of this code which makes it extensible. Tha's how you do Single page applications which is why you have just one App.js. (CSS can be written separately but HTML and JS is mixed together in React.) JSX will have HTML embeeded in it. In Angular, all 4 components were separate for every component created...whereas React is ine one like this.

// Tell concurrently to run server, and then npm start preflix client and this will run both at the same time.

// App.js is a functional based component (dumb simple component) you use class base whenever you need it to be dynamic so we need to turn app.js to eventually a class based one:

// You write all Redux code in App.js because it's needed in Nav bar footer etc. so it's easier to write it in App.js in one place. 

import React, { Component } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// as Router because BrowserRouter too long to type.
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store';
//where my Redux store is. 
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import { logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import {SET_USER} from './actions/types';





// Logout
if (localStorage.jwtToken) {
  const decoded = jwt_decode(localStorage.jwtToken);
  const currentTime = Date.now()/1000;
  if (decoded.exp < currentTime) {
    // Logout - triggering logout action in authAction's code responsible for logging out.
    // App has access to the store...so just call the store because App.js and store is the beginning of everywhere and everything. So just go to the store and dispatch it from there.
    store.dispatch(logoutUser()) // logoutUser is imported in from above, this line triggers the authAction logout. 
    //Now it's time to redirect the user.

    //Is it weird the Store is dispatching a call? Well in REACT - Store and app.js starts everything so React has a ability to dispatch. It's a shortcut to having a UI hack, so without having to get an action call from UI - user is not clicking button to logout because this function will do it for you.
    
    // Since App.js running in the background always, it will trigger and dispatch the call to the Store after 60 minutes time is up. Logout code is in authActions and it will go to the Store to clean up everything.

    // The other way (with UI on top) is just having a logout Button in the Navbar physically so you can get the dispatch call yourself...

    // Redirect
    window.location.href="/login";
  }

  // Mimic login action...for some reason we don't need to say else here...
   //set the token to the auth header
   setAuthToken(localStorage.jwtToken);
   //dispatch set_user 
   store.dispatch({
     type: SET_USER,
     payload: decoded
   }); 
}

class App extends Component {
  render() { // render is the last stage of the component, it will return the html you want to display. You can add more logic than a functional component (more than the code below)
    return (
      
      // Using React Router Dom here: We are wrapping it in <Router> tags because in the future we might add to it etc. Route is without the domain so if you see the / then it means load on the same component.

      // use the name "exact path" + / which helps React go OK if I see / I load main page. If I see /register then instead then load register component.
      //Provider is a react component, all comps below Provider, will have access to store. The store is located (as noted above in import) points to the store.js (store memory)
      <Provider store ={store}>
        <Router>
          <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;

// RCC component
