import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc3MWY4ZmM5ZDM2ZTI5NzljZjM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjA0NjczOCwiZXhwIjoxNjg2MzA1OTM4fQ.bjB60QM_U-4I5jRdwplce3B5g4i0CNf8Pd-0pbvSUX4';

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${TOKEN}` }
});
