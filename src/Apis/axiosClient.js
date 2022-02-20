import axios from "axios";
import queryString from 'query-string';
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    paramsSerializer: param => queryString.stringify(param)
});

axiosClient.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `${token}` : '';
    return config;
});

axiosClient.interceptors.response.use(async response => {
    if (response && response.data) {
        const data =
            typeof response.data === 'object'
                ? response.data
                : { data: response.data };
        return Object.assign({}, data, { status: response.status });
    }

    return response;
}, err => { throw err; }
)

export default axiosClient;