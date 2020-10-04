import axios from 'axios';
import { setData } from '../utils/DataStorage';

export function signIn({ email, name }) {
  axios
    .post('https://greenerappdr.herokuapp.com/auth/local/register', {
      username: email,
      email: email,
      password: email,
      name: name,
    })
    .then(async (response) => {
      console.log('User registered');
      await setData(response.data);
    })
    .catch((error) => {
      // Handle error.
      console.log('An error occurred:', error);
    });
}

export function logIn(userData) {
  const { email } = userData;
  axios
    .post('https://greenerappdr.herokuapp.com/auth/local/', {
      identifier: email,
      password: email,
    })
    .then(async (response) => {
      console.log('User logged in');
      await setData(response.data);
    })
    .catch((error) => {
      // Handle error.
      signIn(userData);
      console.log('An error occurred:', error);
    });
}

export default { signIn, logIn };
