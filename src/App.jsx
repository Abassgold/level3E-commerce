import React from 'react'
// import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup"element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App