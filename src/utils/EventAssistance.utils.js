import axios from 'axios';
import { getData } from './DataStorage';

export async function userWillAssist(eventId) {
    const userData = await getData();
    let pr = await axios.get(`http://greenerappdr.herokuapp.com/assistances/count?event=${eventId}&user=${userData.user.id}`,
        {
            headers: {
                Authorization: 'Bearer ' + userData.jwt,
            },
        })

    return pr.data
}
export async function dataEvent() {
    const userData = await getData();
    let data = {};
    try {
        const response = await axios.post(
            'http://greenerappdr.herokuapp.com/assistances',
            {
                headers: {
                    Authorization: 'Bearer ' + userData.jwt,

                },
                // event = eventId,
                // user = userId

            },
        );
        data = response.data;
    } catch (error) {
        console.log('An error occurred:', error.response);
    }
    return data;
}
