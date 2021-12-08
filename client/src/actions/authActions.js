import { SET_USER, GET_ERRORS } from "./types"
import axios from 'axios';


//whenever someone calls this function, we will dispatch a call with 2 pieces of information - all dispatches has 2 pc of info - 1) type and 2) payload

export const registerUser = (userData, history) => dispatch => {
    axios
      .post('/api/users/register', userData)
      .then(res => history.push('/login'))
      //.catch(err => this.setState({errors: err.response.data})); // there is no State beyond UI so this code is incorrect. We still need the error to my local state error - so we need a second dispatch call call GET_ERRORS. (Arbitary name) So we need another reducer that will listen to error and write the error to the Store and display it in the UI.

      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data}));
}
// when error happens in API, we will dispatch a call  to the error Reducer that will actually pick up the call from this function. Purpose of errorReducer is to pick up all sorts of errors.

  // return {
    // type: SET_USER, // set_user is a type? What does the types.js mean again...? I think it's the key of the dictionary?
    // payload: userData // information of the dispatch call.
 

  // AS  soon as this call is dispatched above... the reducer in the authReducer will listen to this and trigger and write this information above into the redux Store. It's being triggered in the Register component.

  // Always an action will dispatch something - it has to, it's an action - so we're dispatching an axios call.


  export const loginUser = userData => dispatch => {
    axios
     // make axios call and send a token, if successful, we will save the token somewhere and write it into the authorization header. (Like in Postman where there's a header section except now we want to do it automatically using code instead of manually like what we did before)
     .post('/api/users/login', userData)
     .then(res => {
       //save token to localstorage (browser cache)
       

       //set the token to the auth header

       
       //dispatch set_user

     })
     .catch(err => dispatch({
       type: GET_ERRORS,
       payload: err.response.data
      }));
  }