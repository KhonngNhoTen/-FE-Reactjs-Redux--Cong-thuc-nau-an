import React from 'react';
import './Login.css';
import { RoundButton, RoundButtonConstants } from '../RoundButton';
import { LinkText } from '../LinkText';
import { InputText } from '../InputText/InputText';
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
        <InputText type={'text'} placeholder={'Email'}></InputText>

          <InputText type={'password'} placeholder={'Password'}></InputText>
          <LinkText>Forget your password?</LinkText>
          <RoundButton type={RoundButtonConstants.ORANGE_BUTTON} onClick={() => { }}>Sing In</RoundButton>
          <small className='break-line'>Or</small>
          <RoundButton type={RoundButtonConstants.FADED_BUTTON}>Sign Up</RoundButton>
        </div>
      </form>
    </>
  );
};
