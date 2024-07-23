import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import Form from './components/form'
import Output from './components/output'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/output" element={<Output/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </Router>
  )
}

export default App
