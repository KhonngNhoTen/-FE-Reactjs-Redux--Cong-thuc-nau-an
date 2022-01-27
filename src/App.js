import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
      <div className='header'>
        <div className='sub-header'>
          <div className='search-box'>
            <input type='text' />
            <div className='icon'>
              <i class="fas fa-search"></i>
            </div>
          </div>

          <div className='avatar'>

          </div>
        </div>
        
        <div className='tool-group'>
            <div className='filter'></div>
            <div className='creator'></div>
        </div>
      </div>
      <div className='body'>
        {/* <Outlet /> */}
        OKKKKKKK
      </div>
    </div>
  );
}

export default App;
