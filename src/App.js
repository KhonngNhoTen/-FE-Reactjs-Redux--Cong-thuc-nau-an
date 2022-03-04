import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='backround'>
      <div className='box'>
        <div className='header'>
          <div className='sub-header'>
            <div className='search-box'>
              <input type="text" />
              <div className='icon'>
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className='export'>
              <i className="fas fa-file-download"></i>
            </div>
            <div className='avatar'>

            </div>
          </div>

          <div className='tool-group'>
            <div className='add'>
              <i className="fas fa-plus"></i>
              <div>Add</div>
            </div>
            <div className='filter'>
              <div>Filter:</div>
              <select defaultValue='alway' className='select-priority'>
                <option  value="alway">alway</option>
                <option value="often">often</option>
                <option value="sometimes">sometimes</option>
              </select>
            </div>
            <div className='order'>
              <div>Order:</div>
              <select defaultValue= 'dec' className='select-priority'>
                <option value="dec">Name a-z</option>
                <option value="asc">Name z-a</option>
              </select>
            </div>
          </div>
        </div>
        <div className='body'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
