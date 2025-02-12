import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import filmResult from './FilmResult'
import FilmList from './FilmList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {FilmList(["AAAhgyjnmvbyvyv", "BBB"])}
    </>
  )
}

export default App
