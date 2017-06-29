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
};

export default api;
