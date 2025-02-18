import { useEffect, useState } from 'react'
import './App.css'
import filmResult from './FilmResult'
import FilmList from './FilmList'
import axios from 'axios'
import { Film } from './types'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './Layout'
import Films from './pages/Films'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="films" element={<Films />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
