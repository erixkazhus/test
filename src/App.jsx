import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Tours from './pages/Tours'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import ToursAdventure from './pages/ToursAdventure';
import Footer from './components/Footer'
import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/><Footer/></>
  },
  {
    path:'/tours',
    element: <><Navbar/><Tours/><Footer/></>      

  },
    {
    path: '/tours/adventure', // <- new page
    element: <><Navbar /><ToursAdventure /><Footer /></>
  },
  {
    path:'/gallery',
    element: <><Navbar/><Gallery/><Footer/></>
  },
  {
    path:'/about',
    element: <><Navbar/><About/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Navbar/><Contact/><Footer/></>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <ScrollToTop color='white' smooth style={{backgroundColor:'#EF4444', display:'flex', alignItems:'center', justifyContent:'center'}}/>
    </>
  )
}

export default App
