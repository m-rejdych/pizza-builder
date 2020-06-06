import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-builder-4943d.firebaseio.com/',
});

export default instance;
