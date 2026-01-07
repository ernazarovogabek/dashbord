
import React from 'react'
import MainLayout from './layouts/MainLayout'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    
  <Routes>

<Route path='/' element={<MainLayout/>} />

<Route path='/header' element={<Header />} />
<Route path='/sidebar' element={<Sidebar />} />

  </Routes>


    
    </>
  )
}

export default App