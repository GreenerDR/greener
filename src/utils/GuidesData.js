import axios from 'axios';
import { getData, setData } from '../utils/DataStorage';

let marker;
export default async function dataGuide() {
  const userData = await getData();
  let data = {};
  try {
    const response = await axios.get(
      'http://greenerappdr.herokuapp.com/guides',
      {
        headers: {
          Authorization: 'Bearer ' + userData.jwt,
        },
      },
    );
    data = response.data;
  } catch (error) {
    //console.log('An error occurred:', error.response);
  }
  return data;
}
