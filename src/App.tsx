import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import filmResult from './FilmResult'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {filmResult("AAA")}
    </>
  )
}

export default App
