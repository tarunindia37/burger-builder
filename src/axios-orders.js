import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burgur-7c654.firebaseio.com/'
});

export default instance;