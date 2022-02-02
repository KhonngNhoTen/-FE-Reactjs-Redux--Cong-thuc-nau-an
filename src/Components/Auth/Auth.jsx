import React from 'react';
import './Auth.css';
export const Auth = ({ config }) => {
  return (
    <>
      <form className='form-login'>
        <div className='circle-drop'></div>
        <div className='header-form'>
          <div className='title'>{config.heading[0]}</div>
          <div className='title'>{config.heading[1]}</div>
          <div className='content'>{config.contentHeading}</div>
        </div>
        <div className='body-form'>
          {
            config.field.map(e => <div key={e.name}>{e.component}</div>)
          }
        </div>
        <div className='footer-form'>
          {config.footer[0]}
          <small className='break-line'>Or</small>
          {config.footer[1]}
        </div>
      </form>
    </>
  );
};
