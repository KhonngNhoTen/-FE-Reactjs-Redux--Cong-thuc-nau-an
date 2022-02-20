import axiosClient from './axiosClient'

const signIn = (user) => {
    return axiosClient.post('/login', user);
};
const checkToken = () => {
    return axiosClient.post('/check-token');
};


export {
    signIn,
    checkToken
}