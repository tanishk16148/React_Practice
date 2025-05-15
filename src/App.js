import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Helppingtool from './Helppingtool'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Unknownuserofindia from './Unknownuserofindia'
import Validation from './Validation'
import Updatedmailsender from './Updatedmailsender'
import CertificateLogin from './CertificateLogin'
import Calculator from './Calculator'

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/help' element={<Helppingtool/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/cert' element={<Unknownuserofindia/>}/>
      <Route path='/valid' element={<Validation/>}/>
      <Route path='/certificate' element={<Updatedmailsender/>}/>
      <Route path='/certlogin' element={<CertificateLogin/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App