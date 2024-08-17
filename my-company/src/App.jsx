import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Router} from react-router-dom


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
