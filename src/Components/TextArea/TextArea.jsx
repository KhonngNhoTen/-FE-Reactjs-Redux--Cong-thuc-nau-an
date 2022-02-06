import React from 'react';
import './TextArea.css'
const TextArea = ({ placeholder, cols, rows,...props }) => {
  return (
      <textarea 
        className='text-area' 
        placeholder= {placeholder} 
        cols={cols} 
        rows={rows ? rows : 5}
        
      >

      </textarea>
  );
};

export default TextArea;
