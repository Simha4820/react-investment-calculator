import { useState } from 'react';
import Input from "./components/Input";
import Results from './components/Results';
function App() {
  const [userInput,setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    }
  );
  const isInputValid = userInput.duration>0;
  const changeHandler=(identifier,newValue)=>{
    setUserInput((prevUserInput)=>{
      return(
        {
          ...prevUserInput,
          [identifier]: +newValue
        }
      );
    });
  }
  return (
    <>
  <Input userInput={userInput} onChange={changeHandler}/>
  {!isInputValid ? <p className='center'> Please enter the duraton greater than zero </p> : <Results input={userInput} />}
  </>
  );
}

export default App
