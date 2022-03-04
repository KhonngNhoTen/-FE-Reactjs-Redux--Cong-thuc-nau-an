import axiosClient from './axiosClient'

const signIn = (user) => {
    return axiosClient.post('/login', user);
};
const refeshToken = () => {
    return axiosClient.post('/refeshToken');
}

export {
    signIn,
}