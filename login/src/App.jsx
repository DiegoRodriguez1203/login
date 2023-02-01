import { useState } from 'react'
import {Login} from './components/login'
import { Start } from './components/start'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const login = (userCredentials) =>{setUser({id:1, name: 'diego'})}
  const logout = () =>{
    setUser(null)
  }

  return (
    <BrowserRouter>
    <div className='app'>
    <Routes>
      <Route path='/' element={<Login login = {login}/>}/>
      <Route path='/welcome' element={<Start login = {login}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
