import React from 'react';
import './Auth.css';
export const Auth = ({ contentHeading, heading, field, footer }) => {
  return (
    <>
      <form className='form-login'>
        <div className='circle-drop'></div>
        <div className='header-form'>
          <div className='title'>{heading[1]}</div>
          <div className='title'>{heading[0]}</div>
          <div className='content'>{contentHeading}</div>
        </div>
        <div className='body-form'>
          {
            field.map(e => <div key={e.name}>{e.component}</div>)
          }
        </div>
        <div className='footer-form'>
          {footer[0]}
          <small className='break-line'>Or</small>
          {footer[1]}
        </div>
      </form>
    </>
  );
};
