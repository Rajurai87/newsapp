import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pag/Home';
import FetchData from './Components/FetchData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';

  

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/general" element={<FetchData cat="general"/>}/>
        <Route path="/business" element={<FetchData cat="business"/>}/>
        <Route path="/sport" element={<FetchData cat="sport"/>}/>
        <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
        <Route path="/technology" element={<FetchData cat="technology"/>}/>
        <Route path="/health" element={<FetchData cat="health"/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
