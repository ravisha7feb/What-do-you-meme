import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import LandingPage from './components/landingPage/landingPage'
import SecPage from './components/createJoinRoom/createJoinRoom';

function App() {
  return (
    <div className="App">
      {/*<Routes>*/}
      <LandingPage/>
      <SecPage/>
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
