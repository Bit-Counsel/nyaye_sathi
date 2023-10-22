import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Card from "./components/Card"
import ServicesPage from "./components/ServicesPage"
import Gridbox from "./components/Gridbox"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path=  "/Gridbox">  
        <Gridbox/>
        </Route>
      <Route path=  "/ServicesPage">  
        <ServicesPage />
        </Route>z
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
