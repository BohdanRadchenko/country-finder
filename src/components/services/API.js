import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

export const fetchAPI = name => {
  return axios.get(name).then(response => response.data);
};

export const startAPI = () => {
  return axios
    .get('https://restcountries.eu/rest/v2/')
    .then(response => response);
};
