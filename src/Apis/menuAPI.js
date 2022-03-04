import axiosClient from './axiosClient';

const getMenu = async () =>{
  return axiosClient.get('/menu');
}

const menuAPI = {
  getMenu
}

export default menuAPI;