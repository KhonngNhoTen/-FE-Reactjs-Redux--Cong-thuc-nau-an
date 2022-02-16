import axios from "axios";
import queryString from 'query-string';
const axiosClient = axios.create({
    baseURL: process.env.BASE_API_URL ,
    paramsSerializer: param => queryString.stringify(param)
});

axiosClient.interceptors.request.use(async config => {
    return config;
});

axios.interceptors.response.use(async response => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, err => { throw err; }
)

export default axiosClient;