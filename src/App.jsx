import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Redux/Slices/Counter/Counter'
function App() {
  const counter = useSelector((state) => state.counter.count);
  console.log("counter", counter)
  const dispatch = useDispatch()

  return (
    
      <div>
        <h1>Count value {counter}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Icreament</button>

        </div>
    
  )
}

export default App
