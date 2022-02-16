import axiosClient from './axiosClient'

const signIn = (user) => {
   return axiosClient.post('login',user);
};

export {
    signIn
}