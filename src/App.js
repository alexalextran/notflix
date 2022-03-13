
import React from 'react';
import './SASS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';

function App() {



  return (

    <div className="App">
   
      <Routes> 
      <Route  
        path="/" exact element={<SignUpPage />} />

        <Route  
        path= "/home" exact element={<Homepage />} />
      
      </Routes>
   
  
    </div>

  );
}

export default App;
