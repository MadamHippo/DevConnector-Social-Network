export const SET_USER = 'SET_USER';
export const GET_ERRORS = 'GET_ERRORS';

// code word is set_user - the action (click) needs to be picked up by the reducer and the reducer will see the code word "set_user" and the reducer will do it's job applicable to set_user

// all types of dispatch calls made exportable so it's neater to see in one central place where all our USER ACTION TYPES WILL BE.

// Check App.js for the main glossary of where the Routes are located (ie. -- import Login from './components/auth/Login'; or -- import Register from './components/auth/Register';)

// Authentication of registering user and loging in a user is a big deal so we placed set_user in authActions and authReducer.

// Overall flow: Register calls action, action dispatches type, reducer picks up the type and write the data to the store, and finally on the way out write the auth data back to the UI.

// On UI component it shouldn't be doing heavy lifting, because the UI needs to be responsive to other things.

