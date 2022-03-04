import axios from "axios";
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';
import { newAccessToken } from '../Utils/StoreToken'
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    paramsSerializer: param => queryString.stringify(param)
});

axiosClient.interceptors.request.use(async config => {
    const urls = ['/login', '/register', '/refeshToken'];
    if (config.url === urls[2]) {
        const _refeshToken = localStorage.getItem('refeshToken');
        config.headers.Authorization = _refeshToken ? `${_refeshToken}` : '';
    }
    else if (urls.indexOf(config.url) === -1) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `${token}` : '';
    }
    return config;
});

axiosClient.interceptors.response.use(async response => {
    if (response && response.data) 
        return response.data;
    return response;
}, async err => {
    const originalConfig = err.config;
    if(err.response.status === 401) {
       await refeshToken()
            .then( rs => {
                if(!rs.ok) throw Error ('RefeshToken invalid');
                newAccessToken(rs.token);
                const _refeshToken = localStorage.getItem('refeshToken');
                originalConfig.headers.Authorization = _refeshToken ? `${_refeshToken}` : '';
                console.log('Retry requset');
                axios(originalConfig);
            })
            .catch( err => {
                console.error('ERROR', err);
            });  
    }

    console.error('Token invalid');
});
const refeshToken = async () => {
    return new Promise( async (resolve, reject) => {
        await axiosClient.post('/refesh-token')
            .then(rs => {
                resolve(rs);
            })
            .catch(err => reject(err));  
    })
}

export default axiosClient;