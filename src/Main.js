import React, {useState} from 'react';
import AnagramPlayButton from './AnagramPlayButton';
import AnagramSelectInput from './AnagramSelectInput';
import './components/Main.css';
import {Link} from 'react-router-dom';


function Main(props) {
const numbers = [];
for (let number = 5; number <= 8; number++) {
   numbers.push(number);
}
return (
<main className="text-center" id="game-container">
  <h1>Anagram Game</h1>
  <div className="row mx-1 my-3">
      <AnagramSelectInput  label="Maximum Number"
          id="max-number"
          currentValue={props.maxNumber}
          setCurrentValue={props.setMaxNumber}
          values={numbers}  />
  </div>
    <div>
    <AnagramPlayButton />
    </div><br></br>
    <div>
    <Link className="btn btn-secondary" to="/">
          Play2Learn
    </Link>
    </div>
</main>
    )
}

export default Main;


