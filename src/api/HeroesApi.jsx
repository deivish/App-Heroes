import axios from "axios";

const baseURL = 'https://api-heroesdhc.herokuapp.com';

const heroesApi = axios.create({ baseURL });

export default heroesApi;