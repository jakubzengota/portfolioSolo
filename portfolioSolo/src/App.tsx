import { useState, useEffect } from 'react'
import './App.css'
import Lenis from '@studio-freight/lenis'

import Header from './components/header'
import Home from './components/home'
import Hero from './components/hero'
import Footer from './components/footer'

import Switch from "./components/Switch";


function App() {

  

  useEffect(()=>{
    const lenis= new Lenis({
      duration: 2,
    })
    function raf(time: number){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])

  return (
    <div className="container">
      
      {/* <Header/> */}
    
      <Switch />
   
      <Home/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
