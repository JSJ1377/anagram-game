import SelectInput from './SelectInput';
import React from 'react' /// imports main React Library
import './Main.css';
import AnagramGameBtn from './AnagramGameBtn';

function MainAnagram(props, maxNumber) { // main component function

      
    const numbers = [];
    for (let number=2; number <= 10; number++) {
        numbers.push([number, number]);
      }
      
    return ( /// reurns HTML-like code called JSX
        <div className="maincom">
              <h1>Anagram Hunt</h1>

              <div className="row mx-1 my-3">
                  <SelectInput label="Select Word Lenth"
                    id="max-number"
                    currentValue={props.setMaxNumber}
                    setCurrentValue={props.setMaxNumber}
                    values={numbers} />  
                    <h2>Word Length</h2>
                    <input label="Word Length" currentValue={props.setMaxNumber} value={props.setMaxNumber} id="word-length"/>
              </div>   
              <div className="row mx-1 my-3">
                    <AnagramGameBtn/>
              </div>
        </div>
    );
  }
  
  export default MainAnagram; /// eports main component 