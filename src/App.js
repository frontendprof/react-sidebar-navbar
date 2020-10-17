import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";


import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
