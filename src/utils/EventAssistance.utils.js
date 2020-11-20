import axios from 'axios';
import { getData } from './DataStorage';

export async function userWillAssist(eventId) {
  const userData = await getData();
  let pr = await axios.get(
    `https://greenerappdr.herokuapp.com/assistances?event=${eventId}&user=${userData.user.id}`,
    {
      headers: {
        Authorization: 'Bearer ' + userData.jwt,
      },
    },
  );

  return pr.data;
}

export async function getAssistancesQuantity(eventId) {
  const userData = await getData();
  let pr = await axios.get(
    `https://greenerappdr.herokuapp.com/assistances/count?event=${eventId}`,
    {
      headers: {
        Authorization: 'Bearer ' + userData.jwt,
      },
    },
  );

  return pr.data;
}

export async function deleteAssistance(assistanceId) {
  const userData = await getData();
  let pr = await axios.delete(
    `https://greenerappdr.herokuapp.com/assistances/${assistanceId}`,
    {
      headers: {
        Authorization: 'Bearer ' + userData.jwt,
      },
    },
  );

  return pr.data;
}

export async function assistToEvent(eventId) {
  const userData = await getData();
  let pr = await axios.post(
    `https://greenerappdr.herokuapp.com/assistances`,

    {
      user: userData.user.id,
      event: eventId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + userData.jwt,
      },
    },
  );

  return pr.data;
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
