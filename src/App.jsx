import { useState } from 'react';
import Header from './Header.jsx';
import Result from './Result.jsx';
import UserInput from './UserInput.jsx';
import {calculateInvestmentResults} from './util/investment.js';

let data = [];

function App() {
  const [results, setResults] = useState([])

  function calculateResults(inputData){
    const temp = calculateInvestmentResults(inputData);
    setResults(temp);
  }
  return (
    <>
      <Header />
      <UserInput onUnserInputChange={val => calculateResults(val)}/>
      <Result annualData={[...results]}/>
    </>
  )
}

export default App
