import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from './Redux/Hooks'
import { increment } from './Redux/Slices/Counter/Counter'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    
      <div>
        <h1>Count value {count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Icreament</button>

        </div>
    
  )
}

export default App
