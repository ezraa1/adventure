import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import New from "./New";
import Home from "./Home";

function App(){

  return(
    <div>
    <Navbar/>
    <Routes>
     <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
          
        
        <Route  path="/new"element={< New />} /> 
         
        <Route  path="/"element={< Home />} />
        
         
        </Routes>

</div>

  );
}
export default App;
