import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App