import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Levels from './components/Levels';
import Questions from './components/Questions';
import Score from './components/Score';

function App()
{

  const [pageNumber, setPageNumber]= useState(1);

  const[quizzItem, setQuizItem]=useState(
    [
      {
        question: 'Who was Lorenzo Von Matterhorn?',
        answer: 'Barney Stinson',
        options:['Lily Aldrin','Marshal Erikson','Barney Stinson','Ted Mosby']
      }
    ]
  )

  return (<div>
        <div className='nav-bar'>
        {pageNumber===1? null:<div className="now-playing" >Now Playing</div>}
          <button className='nav-bar-item'onClick={()=>{setPageNumber(1)}} >Home</button>
          <button className='nav-bar-item' onClick={()=>{setPageNumber(4)}}>Score</button>
          <button className='nav-bar-item' onClick={()=>{setPageNumber(2)}}>Play Again</button>
          
        </div>
        {
         pageNumber === 1? <Home setPageNumber={setPageNumber}/> : null
        }
        {
         pageNumber === 2? <Levels setPageNumber={setPageNumber}/> : null
        }
        {
        pageNumber === 3? <Questions quizzItem={quizzItem}/> : null 
        }   
        {
        pageNumber === 4? <Score /> : null 
        }     
  </div>)
}

export default App;
