import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import SimpleCarousel from './Components/SimpleCarousel'
import Modal from './Components/Modal'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<Header/>}/>
            <Route index element={<Home/>}/>
            <Route index element={<Footer/>}/>
            <Route index element={<SimpleCarousel/>}/>
            <Route index element={<Modal/>}/>
           </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes