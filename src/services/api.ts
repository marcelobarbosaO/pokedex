import axios from 'axios';

export const apiAuth = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const apiPok = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
