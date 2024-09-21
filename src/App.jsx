import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Design from './Design'
import Products from './Product'
import Contact from './contactUs'
import About from './about'
import Gallery from './gallery'
function App() {
  return (
    <div>
         <Router>  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Design' element={<Design/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Gallery' element={<Gallery/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App