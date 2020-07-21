import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.2.35:3333',
});

export default api;