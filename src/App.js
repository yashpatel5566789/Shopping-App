import React ,{ Component } from 'react';
import ValidatedLoginForm from "./components/Forms/ValidatedLoginForm"
import ValidatedSignupForm from "./components/Forms/ValidatedSignupForm"
import styles from "./styles/styles.css"
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import Header from "./components/Forms/Header"
import './App.css';
import { LoginForm } from './components/Forms/LoginForm';
import index from "./index";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import axios from "axios";
import { responsePathAsArray } from 'graphql';



const client = new ApolloClient({
  uri: "https://vm8mjvrn3.lp.ggl.zone/graphql"

});

//const App = () =>(
//  <ApolloProvider client={client}>
//    <div>
//      <h1>
//        My apollo reacr app
//      </h1>
//    </div>
//  </ApolloProvider>
//)

class App extends Component {

  render() {

  
  return (
    
    <Router>
    <div className="App">
      <Header />
      {<h1> Login Form</h1>}
    <Route path="/" exact  component={ValidatedLoginForm} />
    
    <Route path="/signup" component={ValidatedSignupForm}/>
    

  </div>
  </Router>
  );
}
}
export default App;
