import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //If true...Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
    // Like in postman, header's has common keys 
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken;
// now it's importable