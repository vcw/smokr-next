import axios from 'axios';
import { auth } from './firebase';

export const getLastSmoking = async () => {
  const token = await auth.currentUser.getIdToken();
  const response = await axios({
    method: 'get',
    url: 'https://smokrapp.herokuapp.com/api/smokings/last/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { timestamp, error } = response.data;

  if (error) {
    throw new Error(error);
  }

  return timestamp;
};

export const postSmoking = async (timestamp) => {
  const token = await auth.currentUser.getIdToken();
  const response = await axios({
    method: 'post',
    url: 'https://smokrapp.herokuapp.com/api/smokings/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      timestamp,
    }
  });
  const { status } = response;
  return status;
}