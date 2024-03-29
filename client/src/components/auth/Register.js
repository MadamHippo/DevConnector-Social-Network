import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames'; // library, a function we will call to provide the default classnames and raise errors. Names are stored in setState section of code.
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


//Summary of what's going to happen here:
// Calling API and putting data into the API in this entire section!
// "State" or state information means data in this context, data in component etc. There's different ways to store states.
// We're binding this data.
// Component state: we're storing the data state of the component within the component itself. ie main middle page (login + auth)
// Application state: data is stored in the entire application (navbar + footer)
// Browser state: TBD


class Register extends Component {
  // using import of connect above to connect this component to the Redux store.

  constructor() {
    //constructor automatically gets called first, it's the first function that gets called by App.js. Job of constructor is to allocate space for the component below (during construction)
    super(); 
    // Component = parent (base class); Register = child (sub); Super is the body of the car.
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      // you can see this in the html below in the render section
    }
  }

  onChange(e){ // read the onChange value and write it into this.state
    this.setState({[e.target.name]: e.target.value });
    // this function will figure out the respective key for each form
    // we can match states key (name, email, password etc) now you can figre out which state key to write to. So say take name property (e.target.name) of text box and use that to get the status of the state.
  }

  onSubmit(e){
    // onSubmit function: will call API when onSubmit is pressed (another function)
    // preventing the default action of the form button:
    e.preventDefault();
    // with this button we can stop sending users to another page because this is a single page application. PeventDefault is mandatory, do not forget it.
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // Library name: Axios (sort of like Postman) - make a call from the React side to the Javascript side. It's another version of http client in Angular except Axios is easier.

    this.props.registerUser(newUser, this.props.history);
    // this.props.history = history stack you're passing (back and forth button in a browser)

    //axios
    //.post('/api/users/register', newUser)
    //.then(res => console.log(res.data))
    //.catch(err => this.setState({errors: err.response.data}));
    // we're calling our *own* API that we wrote before (see User.js!). If everything is successful our user data will be returned.
    // Think of Axios as postman.
    //API will perform some validation and that's our full stack development!
    // if Axios was successful you will get the entire response User Data, if not you will get a response error message (See routes / api: users.js)

    //you need space underneath text box to display error dymanically and text box should also turn red using this library called CLASSNAMES. It's a conditional styling. Classnames is installed on the client side, this function provides error stylings.
  }


  // render is the last function so everything comes here to render:
  render() {
    const {errors} = this.props; 
    //changing  const errors to this.props from this.state because this.state is outdated. We're not using local state to store errors, we're reading the errors directly from props. 
    const {user} = this.props.auth;
    
    //noValidate turns off auto validate on the web side. We want to only validate using data from the API side because not all web browsers validate correctly.

    //browsers actually have built in noValidate. We don't want browser doing that because they are NOT reliable. Not all browsers have it. You should turn off validation feature and use our API data.
  
    return (
      <div className="register">
        
      {user? user.name : "no user"}

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>

            <form noValidate onSubmit={this.onSubmit.bind(this)}>
              
              <div className="form-group">

                <input type="text"
                 className={classnames('form-control form-control-lg', {
                   // writing a function to bind classnames error if there's error to the name field. This is done to all the other classname boxes.
                  'is-invalid': errors.name
                })} 
                // is-invalid style applied will make the text box red. This style should be applied to textbox ONLY if there is an error. Which means we make an API call and if API error trigger name field then we will know.
                  placeholder="Name"
                  name="name"
                  value = {this.state.name} // binding name to the value of the textbox, one way binding without onChange will not work. Its only value (API) but clients cant see it. 
                  onChange={this.onChange.bind(this)} // two-way binding -- this fires at the instant something is typed into the input box which goes up to onChange(e) and writes it to the name key of the state.

                // below of invalid-feedback, from boostrap, is a styling for displaying errors. We're validating in a div and binding it to .name. So we can display a feedback for users to see what they did wrong. 

                // <div className="invalid-feedback"> below is a Boostrap styling (html) and it stylizes the error fonts on the front-end.
                // html error stylings are adjusted in the App.css
                  />
                
        
  
                  {
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  }
              </div>
              <div className="form-group">
                <input 
                type="email" 
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                    // writing a function to bind classnames error if there's error to the email field. This is done to all the other classname boxes.
                    // It will call the API and the data comes back will give us the answer to if there's existing errors or not.
                  })}
                placeholder="Email Address" 
                name="email"
                  value = {this.state.email}
                  onChange={this.onChange.bind(this)}
                  />

                <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                  {
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  }                  
              </div>
              <div className="form-group">
                <input 
                type="password"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })} 
                placeholder="Password"
                name="password"
                  value = {this.state.password}
                  onChange={this.onChange.bind(this)}
                />

                  {
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  }         

              </div>
              <div className="form-group">
                <input
                type="password" 
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password2
                })} 
                placeholder="Confirm Password"
                name="password2"
                  value = {this.state.password2}
                  onChange={this.onChange.bind(this)}
                />
                  {
                    <div className="invalid-feedback">
                      {errors.password2}
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

// This part....reading the data bacak to the state so the new data displays in the UI

Register.propTypes = { // why is propTypes differen't from PropTypes?
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
  // We need this action and auth and error = all these things in order for my component to load.
}
// These are all the prop types that's neccessary for the comp to come alive.
const mapStatetoProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
  // we get all the data from state and this function lets us choose what exact data from state we want. In this one, we want auth.

export default connect(mapStatetoProps, {registerUser}) (withRouter(Register));
// registerUser is the first to connect to the Redux store.
// (withRouter(Register)) is moving the User away from the Register component (to go to Login page usually) We had to import withRouter for this.
