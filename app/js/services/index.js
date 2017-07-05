import Axios from './axiosConfig';
import constants from '../constants/defaultPagination';

export const api = {
  getHotels(params) {
    return Axios.get('/hotel', {
      params: {
        ...constants.defaultPagination,
        ...params,
      },
    });
  },
  getHotel(id) {
    return Axios.get(`/hotel/${id}`);
  },
  getCountries(params) {
    return Axios.get('/country', {
      params: {
        ...constants.defaultPagination,
        ...params,
      },
    });
  },
  getCountry(id) {
    return Axios.get(`/country/${id}`);
  },
  addCountry(data) {
    return Axios.post('country', data);
  },
};

export default api;
