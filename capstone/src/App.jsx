import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import Form from './components/form'
import Output from './components/output'
import History from './components/history'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function HomePage()
{
  return (
    <>
    <Form/>
    <Output/>
    </>
  )
}
function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App