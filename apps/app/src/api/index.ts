import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export type RequestReponse<T> = {
  data?: T;
  error?: string;
};
