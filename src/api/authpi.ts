import axios from 'axios';

const authpi = axios.create({
    baseURL: 'https://bootcamp-api.itexon.net/api/register',
})
export default authpi