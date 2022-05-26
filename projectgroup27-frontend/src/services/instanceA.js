import axios from 'axios';

const AUTH_TOKEN = 'auth_token';
const instanceA = axios.create({
    baseURL: process.env.REACT_APP_HOST_ENV,
    headers: {
        'Access-Control-Allow-Origin': '*'

    },
});

instanceA.interceptors.request.use(
    config => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
        }
        return config;
    },
    error => Promise.reject(error)
);

export default instanceA;