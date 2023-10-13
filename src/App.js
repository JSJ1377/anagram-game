import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './Main';
import Game from './Game'

function App() {

const [maxNumber, setMaxNumber] = useState(5);

return (
<div className="App">
  <Routes>
    <Route exact path="/"
      element={
          <Main maxNumber={maxNumber}  setMaxNumber={setMaxNumber} /> }/>
    <Route path="/play"
      element={
          <Game maxNumber={maxNumber} setMaxNumber={setMaxNumber} />}/>
    <Route path="/replay"
      element={
          <Game maxNumber={maxNumber}  setMaxNumber={setMaxNumber} />}/>
  </Routes>
</div>
  );
}

export default App;