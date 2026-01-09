
import React from 'react'
import MainLayout from './layouts/MainLayout'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import Card  from './pages/Card'

const App = () => {
  return (
    <>
    
  <Routes>

<Route path='/' element={<MainLayout/>} />

<Route path='/header' element={<Header />} />
<Route path='/sidebar' element={<Sidebar />} />
<Route path='card' element={<Card />} />

  </Routes>


    
    </>
  )
}

export default App