//import SelectInput from './SelectInput';
import React from 'react' /// imports main React Library
import './Main.css';
import PlayAnagramMainBtn from './PlayAnagramMainBtn';
import PlayMathMainBtn from './PlayMathMainBtn';


function Play2learnMain() { // main component function

      
    return ( /// reurns HTML-like code called JSX
    <div className="play2learn">

            <h1>Play2Learn</h1>
            <div id="anagram_hunt">
                <h2>Anagram Hunt</h2>
                <p>Do you like Scrabble? Words with Friends?<br/>Improve how fast you can recognize<br/>anagrams in a word with this neat little game!
                </p>
                <div className="row mx-1 my-3">
                <PlayAnagramMainBtn />
                </div>
            </div>
            <div id="math_facts">
                <h2>Math Facts Practice</h2>
                <p>Improve your mental math skills with this exciting game!</p>
                <div className="row mx-1 my-3">
                <PlayMathMainBtn/>
                </div>
            </div>
        </div>
    );
}

export default Play2learnMain; /// eports main component 
