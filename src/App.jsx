import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import LoginUser from './pages/LoginUser'
import LoginCaptain from './pages/LoginCaptain'
import SignupUser from './pages/SignupUser'
import SignupCaptain from './pages/SignupCaptain'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/" element={<Start />} />
        <Route path = "/user-login" element = {<LoginUser />} />
        <Route path = "/user-riding" element = {<Riding />} />
        <Route path = "/captain-riding" element = {<CaptainRiding />} />
        <Route path = "/captain-login" element = {<LoginCaptain />} />
        <Route path = "/user-signup" element = {<SignupUser />} />
        <Route path = "/captain-signup" element = {<SignupCaptain />} />

        <Route path = "/home" element = {
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        } />
        
        <Route path='/user/logout' element = {
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />

        <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
        } />

      </Routes>
    </div>
  )
}

export default App
