
import React from 'react';
import './SASS/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import { AuthProvider } from './Contexts/AuthContext';
import Loginpage from './Pages/LoginPage';
import PrivateRoute from './PrivateRoute';



function App() {

 

  return (
   
    <div className="App">
    <AuthProvider> 
      <Routes>
     
      <Route  
        path="/" exact element={<SignUpPage />} />
        
        <Route path="/login" exact element={<Loginpage />} />

        <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Homepage/>}/>
          </Route>
      
      </Routes>
   </AuthProvider>
  
    </div>

  );
}

export default App;
