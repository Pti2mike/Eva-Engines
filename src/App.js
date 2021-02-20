import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Containers/Home";
import Profil from "./Containers/Profil";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
