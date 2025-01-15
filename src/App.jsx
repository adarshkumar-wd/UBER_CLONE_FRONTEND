import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import LoginUser from './pages/LoginUser'
import LoginCaptain from './pages/LoginCaptain'
import SignupUser from './pages/SignupUser'
import SignupCaptain from './pages/SignupCaptain'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path = "/" element={<Start />} />
        <Route path = "/user-login" element = {<LoginUser />} />
        <Route path = "/captain-login" element = {<LoginCaptain />} />
        <Route path = "/user-signup" element = {<SignupUser />} />
        <Route path = "/captain-signup" element = {<SignupCaptain />} />
        <Route path = "/home" element = {<Home/>} />

      </Routes>
    </div>
  )
}

export default App
