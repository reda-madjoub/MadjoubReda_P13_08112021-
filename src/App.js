import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Banner from 'Components/Banner/Banner'
import Footer from 'Components/Footer/Footer'
import Home from 'Components/Home/Home'
import Error from 'Components/Error/Error'
import SignIn from 'Components/SignIn/SignIn'
import Profile from 'Components/Profile/Profile'
import 'App.css';

function App() {
  return (
    <Router>
        <Banner/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<SignIn/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;
