import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Messages from "./pages/Messages";



function App() {
  return (
    <div className="App">
      <h1 className="header">My Website</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/team" component={Team}/>
          <Route path="/support" component={Support}/>
          <Route path="/messages" component={Messages}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
