import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Acceuil from './Feuils/Acceuils';
import NosProduit from './Feuils/NosProduit';
import NotFound from './Feuils/NotFound';
import "./App.css";

function App() {
  return (
    <div className="App">
      
    
      <Router>
      <NavBar />
        <Switch>
        <Route exact path="/"><Acceuil/></Route>
        <Route exact path="/Product"><NosProduit/></Route>
        <Route exact path="/404"><NotFound/></Route>
        <Redirect exact path ="***" to="/404" /> 

        </Switch>
        <Footer />
      </Router>
     
   
    </div>
  );
}

export default App;
