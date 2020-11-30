import axios from 'axios';
import { getData } from '../utils/DataStorage';
import { Alert } from 'react-native';
let marker;
export default async function dataMarker() {
  const userData = await getData();
  let data = {};
  try {
    const response = await axios.get(
      'http://greenerappdr.herokuapp.com/locations',
      {
        headers: {
          Authorization: 'Bearer ' + userData.jwt,
        },
      },
    );
    data = response.data;
  } catch (error) {
    console.log('An error occurred: 1', error.response);
    Alert.alert(
      'Los sentimos, sucedio un error. Por favor intente de nuevo!',
      error.message,
      [
        {
          text: 'Intente de nuevo',
          onPress: this.getData(),
        },
      ],
    );
  }
  return data;
}
