import { useState } from 'react';
import Header from './Header.jsx';
import Result from './Result.jsx';
import UserInput from './UserInput.jsx';

function App() {
  const [inputValue, inputChange] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });
  const inputIsValid = inputValue.duration >= 1;

  function setUserInput(id, value){
    console.log(inputValue, id, value)
    inputChange( prevVal => (
      {
        ...prevVal,
        [id]: +value
      }
    ))
  }
  return (
    <>
      <Header />
      <UserInput userInput={inputValue} onUnserInputChange={setUserInput}/>
      {
        inputIsValid ? <Result userInput={inputValue}/> : undefined
      }
    </>
  )
}

export default App
