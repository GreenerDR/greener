import axios from 'axios';
import { getData } from '../utils/DataStorage';

let marker;
export default async function dataEvent() {
    const userData = await getData();
    let data = {};
    try {
        const response = await axios.get(
            'http://greenerappdr.herokuapp.com/events',
            {
                headers: {
                    Authorization: 'Bearer ' + userData.jwt,
                },
            },
        );
        data = response.data;
    } catch (error) {
        console.log('An error occurred:', error.response);
    }
    return data;
}