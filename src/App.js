import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import About from './Components/Aboutus';

import HomePage from './Components/Start_page';
import Navbars from './Components/Navbar';


function App() {
  return (<>
    <Navbars/>
  <Routes>
    <Route path="/home" element= {  <HomePage/>}>

</Route>

<Route path="/about" element= {  <About/>}>

</Route>
  </Routes>


        
  </>
  );
}

export default App;