import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Login extends Component {

  constructor() {
    //constructor automatically gets called first, it's the first function that gets called by App.js. Job of constructor is to allocate space for the component below (during construction)
    super(); 
    // Component = parent (base class); Register = child (sub); Super is the body of the car.
    this.state = {
      //login doesn't need name
      email: '',
      password: '',
      password2: '',
      // you can see this in the html below in the render section
      errors: {}
      // blank is represented in setState below in axios
    }

  }

  onChange(e){ // read the onChange value and write it into this.state
    //onchange is same as register
    this.setState({[e.target.name]: e.target.value });
    // this function will figure out the respective key for each form
    // we can match states key (name, email, password etc) now you can figre out which state key to write to. So say take name property (e.target.name) of text box and use that to get the status of the state.
  }

  onSubmit(e){
    // onSubmit function - login almost same as register except the name of course
    // preventing the default action of the form button:
    e.preventDefault();
    // with this button we can stop sending users to another page because this is a single page application. PeventDefault is mandatory, do not forget it.
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    // Library name: Axios (sort of like Postman) - make a call from the React side to the Javascript side. It's another version of http client in Angular except Axios is easier.

    axios
    .post('/api/users/login', user)
    .then(res => console.log(res.data))
    .catch(err => this.setState({errors: err.response.data}));
    // we're calling our *own* API that we wrote before (see User.js!). If everything is successful our user data will be returned.
    // Think of Axios as postman.
    //API will perform some validation and that's our full stack development!
    // if Axios was successful you will get the entire response User Data, if not you will get a response error message (See routes / api: users.js)

    //you need space underneath text box to display error dymanically and text box should also turn red using this library called CLASSNAMES. It's a conditional styling. Classnames is installed on the client side, this function provides error stylings.
  }



  render() {
    const {errors} = this.state;
    // same steps as Register. If there are errors with email, it will show under textbox.
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your DevConnector account</p>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input type="email" className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                     placeholder="Email Address" name="email"
                     value = {this.state.email}
                    onChange={this.onChange.bind(this)}
                     />
                   {
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })} placeholder="Password" name="password"
                    value = {this.state.password}
                    onChange={this.onChange.bind(this)}
                     />
                    {
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    }
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

// Notes -- inside our UI project, there's 3 ways to store DATA as states. Local, global and browser states. It's only available in that component (local) similar to scope in functions. We use it because we want to preserve data until it gets sent to API. 
// global state is to display data across components. It can be accessed in multiple components in the state. That's where Redux comes in. Mobx is the other one.
// In the web world we use Redux. Browser state will be discussed later.
// ALL 3 states are COMPLIMENTS to each other, not inclusive!
// Similar to creating private and public apis, local vs global but they are not exclusionary to each other.

// Redux notes (from 2021 11 20):
//There's a lot of code neccessary to write Redux.
//The first step is creating the Store in Redux. Store = temporary state. We have to create a piece of memory somewhere to store this data as long as the browser is open. Store is saying hey create a piece of memory to store this data in the component and accessible by other components. 
// The way Redux has been built (by Facebook) at any point the store is busy writing data because they can handle just 1 request. You don't want a direct connection to the Store. yOu need....a reducer!
//So the reducer will filter down what is stored in the store. Reducers are the second step, to answer who will be responsible to write the data to the store. Which means you have to call Reducer (you can have multiple Reducers to filter down the data). Anything the data changes is called a transformation for multiple reducers: 
// For example: Auth reducer, error reducer, post reducer, profile reducer etc.
// Actions is the third step: submit button is an example of action. The submit button will make a call from Axios...action will collect your data to be selected. Action will pass this data to reducer. Login function in the action is used to make a API call, when the API response it will be sent to the Auth reducer to the store eventually. 
// So action calls data, data responds, action sends to reducer via Dispatch (call center), reducer to write in the store 
// UI Action (in the Uber example, people who want a ride and making call to get a call). Action do not directly call Reducer. The call center in Action is a dispatch that will call the Reducer.
// Action says "oh I want to write to Auth data" so Reducer will go "OK I handle auth data, so I can write it to the store"
//Since you have broken Reducers down to different Reducers, these specific Reducers know what to do.
// Each Reducer will be responsible for different area of data, which makes the process faster.
// UI (React/Redux side) -> API -> Mongoddb ... you can scale out UI / Redux based on user demand. In multiple users (lots of users), scale out multiple servers on the front end within the Redux (using a load balancer to sit in the front) so users can route diff users to different machines. 
//There are multiple Reacts, and multiple different servers in the cloud.
// Each dispatch will have a code (to cover auth dispatch or profile dispatch) so they can send it to the right reducer based on the incoming data.
// Dispatch auth will sit on top of the Reducer? No they're different components. Dispatch and auths are variables. Dispatch is like the baton in a relay race. 
// Dispatch acts like the "glue"
// redux.js.org for docs and API
