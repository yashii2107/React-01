import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(15)
  const addValue = ()=>{
    console.log("value added", counter)
   
    if(counter>=20){
      setCounter(15)
    } else{
      setCounter(counter+1)
    }
    
  }
const reduceValue = ()=>{
if(counter<=0){
  setCounter(15)
} else{
  setCounter(counter-1)
}
}
  return (
    <>
     
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value:{counter}</button>
      <button onClick={reduceValue}>Decrease Value:{counter}</button>
    </>
  )
}

export default App
