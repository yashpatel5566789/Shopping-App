import React from 'react';
import ValidatedLoginForm from "./components/Forms/ValidatedLoginForm"
import ValidatedSignupForm from "./components/Forms/ValidatedSignupForm"
import styles from "./styles/styles.css"
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import Header from "./components/Forms/Header"
import './App.css';
import { LoginForm } from './components/Forms/LoginForm';
import index from "./index";


function App() {
  return (
    
    <Router>
    <div className="App">
      <Header />
    <h1> Login Form</h1>
    <Route path="/" exact component={ValidatedLoginForm}/>
    
    <Route path="/signup" component={ValidatedSignupForm}/>
    

  </div>
  </Router>
  );
}

export default App;
