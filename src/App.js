
import React from 'react';
import './SASS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import { AuthProvider } from './Contexts/AuthContext';
import Loginpage from './Pages/LoginPage';

function App() {



  return (
   
    <div className="App">
    <AuthProvider> 
      <Routes>
     
      <Route  
        path="/" exact element={<SignUpPage />} />
        
        <Route path="/login" exact element={<Loginpage />} />

        <Route  
        path= "/home" exact element={<Homepage />} />
      
      </Routes>
   </AuthProvider>
  
    </div>

  );
}

export default App;
