import React from 'react';
import './App.css';
import Home from './components/Home';


function App()
{
  return (<div>
        <div className='nav-bar'>
          <div className='nav-bar-item'>Home</div>
          <div className='nav-bar-item'>Score</div>
          <div className='nav-bar-item'>Play Again</div>
        </div>
        
      <Home/>
      
  </div>)
}

export default App;
