import React from 'react';
import './Auth.css';
export const Auth = ({ config }) => {
  return (
    <>
      <form className='form-login'>
        <div className='circle-drop'></div>
        <div className='header'>
          <div className='title'>{config.heading[0]}</div>
          <div className='title'>{config.heading[1]}</div>
          <div className='content'>{config.contentHeading}</div>
        </div>
        <div className='body'>
          {
            config.field.map(e => <div key={e.name}>{e.component}</div>)
          }
        </div>
        <div className='footer'>
          {config.footer[0]}
          <small className='break-line'>Or</small>
          {config.footer[1]}
        </div>
      </form>
    </>
  );
};
