import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Gallery from './components/Gallery'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Gallery/>
      <Footer />
    </>
  )
}

export default App
