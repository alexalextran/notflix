
import React from 'react';
import './SASS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import Nav from './Components/Nav';

function App() {

  return (

    <div className="App">
      <Nav />
      <Routes> 
        
        <Route  path="/" element={<Homepage />} />
      
      </Routes>
   
  
    </div>

  );
}

export default App;
