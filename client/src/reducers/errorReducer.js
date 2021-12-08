// Because we have an get_error type in action, we need a error Reducer 

// when error happens in API, we will dispatch a call  to the error Reducer that will actually pick up the call from this function. Purpose of errorReducer is to pick up all sorts of errors.


import { GET_ERRORS } from "../actions/types";

const initialState = {};

// initialState is nothing and empty because errors can't come by default. 

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action){
  // All reducers will have this function call (state + action) | action = type of action of the dispatch call. Then we're writing Switch statement to check the action type. 
  switch(action.type){
    case GET_ERRORS:
      return action.payload;
      // Nothing to copy or spread with the ... so all we do is return the payload.
    default:
      return state;
      // This is the initial state, first state, first dispatch call...all these Reducers write in the initial state no matter if it's broken or no.
      // If there are no errors then we will just return the state.
      
      // since there's nothing to copy, no need to spread like what we did in authReducer.js.
      
      // all needs be is to return the option in a payload.

    // Bonus homework: how to clear the error reducer message to the original, initial errorless State? (WDBootC11 2021 12 04 = 27:00)

  }
}
// action contains the type of the dispatch call AND payload.