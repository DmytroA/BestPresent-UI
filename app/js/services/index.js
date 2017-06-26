import Axios from './axiosConfig';

export const api = {
  getHotels() {
    return Axios.get('/home', {
      params: {
        page: 2,
        pageSize: 10,
      },
    });
  },
  getHotel(id) {
    return Axios.get(`/home/${id}`);
  },
};

export default api;
