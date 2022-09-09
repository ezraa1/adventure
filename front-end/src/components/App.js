import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Home from "./Home";
import Header from "./Header";
import New from "./New";


function App(){

  return(
    <div>
    
    <Navbar/>
    <Routes>
     <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
          
        
        <Route  path="/new"element={< New />} /> 
         
        <Route  path="/home"element={< Home />} />

        <Route  path="/"element={< Header />} />
        
         
        </Routes>

</div>

  );
}
export default App;
