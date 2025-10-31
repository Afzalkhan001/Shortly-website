import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyShortly from './components/WhyShortly'
import WhyHyperLocal from './components/WhyHyperLocal'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-white' : 'bg-dark'}`}>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="why-shortly">
        <WhyShortly />
      </div>
      <div id="why">
        <WhyHyperLocal />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  )
}

export default App
