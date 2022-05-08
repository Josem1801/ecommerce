import axios from 'axios';

const { NEXT_PUBLIC_BASE_URL } = process.env;
const requester = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default requester;
