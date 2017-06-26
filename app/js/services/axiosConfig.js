import axios from 'axios';
import Constants from '../constants/Constants';

const makeInstance = () => {
  const instance = axios.create({ baseURL: Constants.api.url });
  instance.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
      throw error;
    }
  });

  return instance;
};
export default makeInstance();
