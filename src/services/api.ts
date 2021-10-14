import axios from 'axios';

export const apiAuth = axios.create({
  baseURL: 'https://api.b4you.com.br/sandbox/v1/',
});

export const apiPok = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
