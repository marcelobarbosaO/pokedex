/* eslint-disable no-param-reassign */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.b4you.com.br/sandbox/v1',
});
