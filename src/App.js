
import React from 'react';
import './SASS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import Nav from './Components/Nav';
import Loginpage from './Pages/LoginPage';

function App() {



  return (

    <div className="App">
   
      <Routes> 
      <Route  
        path="/" exact element={<Loginpage />} />

        <Route  
        path= "/home" exact element={<Homepage />} />
      
      </Routes>
   
  
    </div>

  );
}

export default App;
