import axios from 'axios';

export const api = axios.create({
    baseURL: "https://curiango.netlify.app"
});

