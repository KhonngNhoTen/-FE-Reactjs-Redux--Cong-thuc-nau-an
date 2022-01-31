import './App.css';
import RecipeCard from './Features/RecipeCard'
import React from 'react';
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
              <i class="fas fa-file-download"></i>
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
              <select className='select-priority'>
                <option selected value="alway">alway</option>
                <option value="often">often</option>
                <option value="sometimes">sometimes</option>
              </select>
            </div>
            <div className='order'>
              <div>Order:</div>
              <select className='select-priority'>
                <option selected value="alway">Name a-z</option>
                <option value="often">Name z-a</option>
              </select>
            </div>
          </div>
        </div>
        <div className='body'>
           <RecipeCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
