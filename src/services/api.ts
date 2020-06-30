import axios from 'axios';

const api = axios.create({
  baseURL: 'http://procyon:3333',
});

export default api;
