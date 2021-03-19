import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
/* Navbar */
import NavBar from "./components/NavBar/NavBar";
/* Pages */
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Location from "./pages/Location/Location";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/careers" exact component={Careers} />
        <Route path="/location" exact component={Location} />
        <Route path="/" exact component={About} />
      </Switch>
    </Router>
  );
};

export default App;
