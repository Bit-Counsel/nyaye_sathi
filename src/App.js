import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Pages/LandingPage";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import Card from "./components/Card"
import ServicesPage from "./components/Pages/ServicesPage"
import Gridbox from "./components/Gridbox"
import Test from "./components/test"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      
      <Switch>
        
      <Route path=  "/test">  
        <Test/>
        </Route>
      <Route path=  "/Gridbox">  
        <Gridbox/>
        </Route>
      <Route path=  "/ServicesPage">  
        <ServicesPage />
        </Route>
      <Route exact path="/SignIn">
        <SignIn />
        </Route>

        <Route exact path="/SignUp">
        <SignUp />
        </Route>

        <Route  path ="/">
        <LandingPage/>
        </Route>

      </Switch>
      </Router>
    </>
  );
}

export default App;
