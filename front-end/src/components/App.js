import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Home from "./Home";
import Header from "./Header";
import New from "./New";
// import Comments from "./Comments";

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

        
        
        <div className="par">
        
       <p>Life Is too important to be taken seriously...</p> 

       <p><h2>JOIN US AND ADVENTURE!</h2></p>
       </div>
       <footer id="footer">
          <p>infor@adventures.co.ke <i class="fa fa-envelope"></i></p>
          <p>Designed by : Ezra Kipchirchir <i class="fa fa-user-circle"></i></p>
          <p>contact : +254706103204 <i class="fa fa-phone"></i></p>
</footer>

</div>

  );
}
export default App;
