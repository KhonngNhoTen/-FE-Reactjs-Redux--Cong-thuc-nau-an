import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import menuAPI from '../../Apis/menuAPI';
const Menu = () => {
  const navigate = useNavigate();
  useEffect(async () => {
    await menuAPI.getMenu()
                 .then( (rs) => {
                    if( rs.status === 401) {
                      navigate('/login');
                    }else {
                      console.log(rs);
                    }
                 })
                 .catch((err) => console.log(err));
  },[]);
  return (
      <div>
          Menu
      </div>
  )
};

export default Menu;
