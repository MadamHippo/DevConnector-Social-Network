// separating out store so this file doesn't crowd App.js

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
// index is a special name, it default picks up index.js file name but you can still specify it
import thunk from 'redux-thunk';

const middlware = [thunk];
const store = createStore(
                rootReducer, 
                {},
                compose( 
                  applyMiddleware(...middlware),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                ));

//store is variable. createStore is function. Reducer is in [] it is an array bc we have more than one reducer.....actually no let's just put rootReducer instead of array because its simpler.

// when you create a store, who are all the reducers that can write data into the store. You must pre-register them.

//applyMiddleware which transforms and enchances data. What should we enchance? Thunking can help break your data down in smaller pieces and it will be written parallelly.

// ... is the spread operator that copys data and enchance that copy of the data. It doesn't impact the original form of data. It makes a copy of the new data and make enhancements on top of that new data.

// so as that data comes into the store, it will spread it aka make copy of it, and thunk will break it into smaller chunks

// the 'window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()' allows you to use this extentsion to access the data (meant for development) so when you run it non-local and you're serving real life traffic then other people could see other people's data in the store without this tool.

// State is showing what data is in your data store.

// Application started when store got called, then store called root (index.js) which initalized the authReducer and the authReducer initialized the state. 

// Store woke up authReducer and took the default data we wrote and wrote it into the store.

export default store;