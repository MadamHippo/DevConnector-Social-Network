// file naming has nothing to do what this .js file knows. Filenames are only for humans.
// In order for the computer to know this is a auth reducer, we can use this across components:

import { SET_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
}

// user is empty object for now. We're creating an intial state which gets created in the reducer...
// when you call this reducer, it will have 2 parameters and a switch statement on what to do.
// switch is simplifed if statement

// this is an anonymouns function, we don't need a name because we're just exporting it.

export default function(state=initialState, action){
  switch(action.type){
    case SET_USER:
      // if I see this call to set_user, then I will pick it up as I return to the state and spread the state (data) and set the user data.


      return{
        ...state,
        // return to state and make a copy of that data sent..then it will Pick apart that data...and write that data (set_user) into user:action.payload:

        // In an uber example, set_user is like hey I want to go from seattle to redmond...and the state in this example is your pick up address.
        
        // A new data will come when the user logins (they click on the user button). This action will call the API to get the token and then dispatch new data as a copy.

        user: action.payload

        // action payload is the "uber address" your dispatch call is (and in this case you want to go from seattle to redmond aka set_user)

        //This section will then overwrite the initial state with the information we need.

      }
      
      // this is how the Reducer is signed up to recieve a request and perform a action on top of that


    default:
      return state;
  }
}