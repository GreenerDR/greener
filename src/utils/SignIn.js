import axios from 'axios';

export function signIn({ email, name }) {
  axios
    .post('http://localhost:1337/auth/local/register', {
      username: email,
      email: email,
      password: email,
      name: name,
    })
    .then((response) => {
      // Handle success.
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch((error) => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
}

export function logIn({ email }) {
  axios
    .post('http://localhost:1337/auth/local', {
      identifier: email,
      password: email,
    })
    .then((response) => {
      // Handle success.
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle error.
      console.log('An error occurred:', error);
    });
}

export default { signIn, logIn };
