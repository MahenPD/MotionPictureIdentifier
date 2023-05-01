import axios from 'axios';

const instance = axios.create({
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    mobile_request: true,
  },
});

export const get = url => instance.get(url);
export const remove = url => instance.delete(url);
export const post = (url, data) => instance.post(url, data);
export const update = (url, data) => instance.put(url, data);
