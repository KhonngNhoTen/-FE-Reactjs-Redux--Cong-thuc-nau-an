import React from 'react';
import './Login.css';
import { RoundButton,Contants } from '../RoundButton';

export const Login = () => {
  return (
    <>
      <form className='form-login'>
        <div className='circle-drop'></div>
        <div className='header'>
          <div className='title'>Welcome</div>
          <div className='title'>Back</div>
          <div className='content'>Please enter information to continue.</div>
        </div>
        <div className='body'>
          <div className='input'>
            <input type="text" placeholder='Email' />
          </div>
          <div className='input'>
            <input type="password" placeholder='Password' />
          </div>
          <div className='link-text'>
            Forget your password?
          </div>
          <input type="button" className='round-button sign-in' value='Sign In' />
          <small className='break-line'>Or</small>
          <input type="button" className='round-button sign-up' value='Sign Up' />
        </div>
      </form>
      <RoundButton value='note' type={Contants.ORG} >OK</RoundButton>
    </>
  );
};
