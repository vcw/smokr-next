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
  const { timestamp } = response.data;
  return timestamp;
};