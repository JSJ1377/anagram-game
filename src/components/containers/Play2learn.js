import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'; // imports CSS
import Main from '../Main'
//import '../../index.css'
import Play2learnMain from '../Play2learnMain'

import Game from '../Game';

import MainAnagram from '../../Main'
import GameAnagram from '../../Game'


function Play2learn(props) { // main component function

  const [operation, setOperation] = useState('x');
const [maxNumber, setMaxNumber] = useState(5);

      
    return ( /// reurns HTML-like code called JSX
        <div className="Play2learn">
        <Routes>
        <Route
          path="/"  
          element={
            <Play2learnMain/>
          }
        />
        <Route
          path="/PlayMain"
          element={<Main operation={operation} maxNumber={maxNumber} />}
        />

<Route
          path="/Play"
          element={<Game operation={operation} maxNumber={maxNumber} />}
        />




<Route exact path="/anagram"
      element={
          <MainAnagram maxNumber={maxNumber}  setMaxNumber={setMaxNumber} /> }/>
    <Route path="/playAnagram"
      element={
          <GameAnagram maxNumber={maxNumber} setMaxNumber={setMaxNumber} />}/>
    <Route path="/replayAnagram"
      element={
          <GameAnagram maxNumber={maxNumber}  setMaxNumber={setMaxNumber} />}/>
 

    </Routes>

        </div>
  );
}
  export default Play2learn; /// eports main component 