import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import anagrams from './anagrams';
import Score from './Score';
import Winner from './winner.jpg';
import Timer from './Timer';
import './components/Main.css';
import './components/containers/App.css'

function Game({maxNumber}) {
  const [word, setWord] = useState("");
  const [randWord, setRandWord] =useState();
  const [score, setScore] = useState(0);
  const [triesLeft, setTriesleft] = useState(0);
  const [matchedArray, setMatchedArray] = useState([])
  const [htmlArray, setHtmlArray] = useState([])
  const gameLength = 60; // Seconds
  const [timeLeft, setTimeLeft] = useState(gameLength);
  const [itemsArray, setItemsArray] = useState([])
  const [arrayVal, setArrayVal] = useState([])
  const [levelCounter, setLevelCounter] = useState(1)
  const [levelArrayCount, setLevelArrayCounter] = useState(0)
  const [levelComplete, setLevelComplete] = useState(0)

useEffect(()=>{
    console.log("use effect ran")
    generateNewArray(maxNumber)
},[]);

const handleChange =(e) =>{
  const word= e.target.value //get word 
    .replace(/[0-9]/g, '')
    .replace(/[~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g, '')
    
      const getWord = word.toLowerCase().trim()
    
      setWord(getWord)/// set input value
  
if(itemsArray.includes(getWord)// check itemsArray array for word
  && !arrayVal.includes(getWord) // setup validation on textbox
  && randWord !== getWord) // random array word != to entered word
  {
    setArrayVal([ /// setup validation array
    ...arrayVal, getWord     
    ])
    setupGameArrays(getWord) ///setup game arrays
    setWord('') // clear textbox input
    }else if(itemsArray.includes(getWord)) {
    setWord('')// clear textbox input
  }
}

function generateNewArray(maxNumber){
  //// two random numbers for arrays of arrays
  const  randInteger1 = Math.floor (Math.random ()*anagrams[maxNumber].length)
  const  randInteger = Math.floor (Math.random ()*anagrams[maxNumber][randInteger1].length)

  //// get new array to play
  let newAnagram = anagrams[maxNumber][randInteger1]

  /// query for any array matches in Matched Arrays
  let query = matchedArray.includes(newAnagram)
  
  let anagramNum = newAnagram.length /// setup anagram length
  let anagramNumber = anagramNum -1 /// setup tries left 
            console.log(newAnagram)
  let selectRandWord = newAnagram[randInteger] /// select random word from array
  let setupLevel = anagrams[maxNumber].length /// set levels

            setTriesleft(anagramNumber)
            setItemsArray(newAnagram)
            setRandWord(selectRandWord) 
            setLevelArrayCounter(setupLevel)

    if(query === true
    && matchedArray.length !== levelArrayCount) // check if all matches found in array
    {
      generateNewArray(maxNumber)
    }
   
    if(query === false)
    {
      } else if(matchedArray.length === levelArrayCount){
            setLevelComplete(99) ///// level completed 
      } else if(levelComplete===99){
            setLevelCounter(0)
            setLevelArrayCounter(0)
            setLevelComplete(0)
    }

}

function setupGameArrays(getWord){ //// get word from input textbox
  for(let i=0; itemsArray.length>i; i++){ //// iterate through items array of new anagram
    if(itemsArray[i]===getWord){ /// check for matches and validate
            if(itemsArray.includes(getWord)
            && !arrayVal.includes(getWord)
            && randWord !== getWord){

              setTriesleft(triesLeft - 1)
              setScore(score + 1)

              setHtmlArray([
                ...htmlArray,
                {id: i, name: getWord}   
              ])
            }

            if(!matchedArray.includes(itemsArray)){
              setMatchedArray([
                ...matchedArray,
                  itemsArray
               ])
            }
    
            if(triesLeft ===1 ){
              setHtmlArray([])
              setArrayVal([])
              setLevelCounter(levelCounter+1)
              generateNewArray(maxNumber)
            }   
    }
  }
}

function restart(){ 
              generateNewArray(maxNumber)

              setLevelCounter(0)
              setLevelArrayCounter(0)
              setLevelComplete(0)

              setMatchedArray([])
              setHtmlArray([])
              setArrayVal([])
                  
              setTimeLeft(gameLength);
              setScore(0);
}

if (timeLeft===1) {
  return (
    <div className="text-center" id="game-container">
    <h2>Game Over!</h2><br></br>
      <strong style={{ fontSize: '1.5em' }}>You Answered</strong>
      <div style={{ fontSize: '5em' }}>{score}</div>
      <strong style={{ fontSize: '1.5em' }}>Questions Correctly</strong>
        <br></br>
      <button className="btn btn-primary form-control m-1" onClick={restart}>
          Play Again!
      </button>
      <br></br>
      <Link className="btn btn-primary" to="/anagram">
      Restart
      </Link><br></br>
    </div>
  );
} 

if (levelComplete===99) {
  return (
    <div className="text-center" id="game-container">
    <img src={Winner} width="150" height="250" ></img>
    <h2>Level Completed</h2>
    <div>
    <button  className="btn btn-primary" onClick={restart}>
          Play Again!
    </button>
    </div><br></br><div>
    <Link className="btn btn-primary" to="/anagram">
      Restart
    </Link>
    </div>
    </div>
  );
}
return (
  <main className="text-center" id="game-container">
  
  <div>
    <Score score={score} /><br></br>
  </div>
      <strong style={{ fontSize: '1.5em' }}>
        {randWord},{triesLeft}Tries Left</strong>
        <br></br>
      <label htmlFor="word"
       style={{ fontSize: '1.5em' }}> Enter a Word: 
      <input autoFocus type="text" id={word} 
        value={word} onChange={handleChange}/>
      </label><br></br>
      Matched Words<br></br>
      <div className="col px-3 text-right">
  <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
     <ol style={{ fontSize: '1.5em' }}>
        {htmlArray.map(htmlArray => (
          <li key={htmlArray.id}>{htmlArray.name}</li>
        ))}
      </ol>
  </div>
  </main>
  )
}

export default Game;
