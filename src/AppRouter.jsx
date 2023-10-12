import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateClient from './pages/CreateClient'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/create/client' element={<CreateClient />} />
        </Routes>
    </>

  )
}

export default AppRouter