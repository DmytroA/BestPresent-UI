import Axios from './axiosConfig';

export const api = {
  getHotels() {
    return Axios.get('/hotel', {
      params: {
        page: 2,
        pageSize: 10,
      },
    });
  },
  getHotel(id) {
    return Axios.get(`/hotel/${id}`);
  },
  getCountries() {
    return Axios.get('/country', {
      params: {
        page: 1,
        pageSize: 10,
      },
    });
  },
  getCountry(id) {
    return Axios.get(`/country/${id}`);
  },
};

export default api;
