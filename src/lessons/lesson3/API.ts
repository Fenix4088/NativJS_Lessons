import axios from 'axios';

const key = '?apikey=824432f8';
const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${key}&t=${title}&type=${type}`)
    }
};

