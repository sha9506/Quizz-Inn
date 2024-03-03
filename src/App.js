import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Levels from './components/Levels';
import Questions from './components/Questions';
function App()
{

  const[quizzItem, setQuizItem]=useState(
    [
      {
        question: 'Who was Lorenzo Von Matterhorn?',
        answer: 'Barney Stinson'
      },
      {
        question: 'who was the mother',
        answer: 'Tracy Mcconnell'
      },
    ]
  )

  return (<div>
        <div className='nav-bar'>
          <div className='nav-bar-item'>Home</div>
          <div className='nav-bar-item'>Score</div>
          <div className='nav-bar-item'>Play Again</div>
        </div>
        <Home/>  
        <Levels/>
        <Questions/>      
  </div>)
}

export default App;
