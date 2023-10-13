import SelectInput from './SelectInput';
import React from 'react' /// imports main React Library
import './Main.css';
import MainMathGamePlayBtn from './MainMathGamePlayBtn';
import {Link} from 'react-router-dom';

function MainMath(props) { // main component function
 const operations = [
      ['Addition', '+'],
      ['Subtraction', '-'],
      ['Multiplication', 'x'], 
      ['Division', '/']];
      
    const numbers = [];
    for (let number=2; number <= 100; number++) {
        numbers.push([number, number]);
      }
      
    return ( /// reurns HTML-like code called JSX
        <div className="maincom">
              <h1>Math Facts Practice</h1>
              <div className="row mx-1 my-3">
                  <SelectInput label="Operation"
                    id="operation"
                    currentValue={props.operation} 
                    setCurrentValue={props.setOperation}
                    values={operations} />
              </div>
              <div className="row mx-1 my-3">
                  <SelectInput label="Maximum Number"
                    id="max-number"
                    currentValue={props.maxNumber}
                    setCurrentValue={props.setMaxNumber}
                    values={numbers} />  
              </div>   
              <div className="row mx-1 my-3">
                  <MainMathGamePlayBtn/>

             </div>
             <div className="row mx-1 my-3">

             <Link className="btn btn-secondary" to="/">
              Play2Learn
              </Link>
          </div>
        </div>
    );
  }
  
  export default MainMath; /// eports main component 