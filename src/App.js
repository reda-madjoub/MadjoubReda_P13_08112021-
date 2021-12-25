import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Banner from 'Components/Banner/Banner'
import Footer from 'Components/Footer/Footer'
import Home from 'pages/Home/Home'
import Error from 'Components/Error/Error'
import Login from 'pages/Login/Login'
import Profile from 'pages/Profile/Profile'
import 'App.css';

function App() {
  return (
    <Router>
        <Banner/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;
