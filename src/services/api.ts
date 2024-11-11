import axios from "axios";

const baseURL = 'https://api.tvmaze.com';

const createApi = () => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  }) ;
};

export const api = createApi();