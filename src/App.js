import React from "react";
import "./SASS/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Homepage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import { AuthProvider } from "./Contexts/AuthContext";
import Loginpage from "./Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Fourofour from "./Pages/fourOfour";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <AuthProvider>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route path="/login" exact element={<Loginpage />} />

            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Homepage />} />
              <Route path="*" element={<Fourofour />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
