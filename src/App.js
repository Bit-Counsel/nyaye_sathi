import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App(){
  return (
    <>
    <SignUp/>
    {/* <Router>
    <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          <Route path="/">
          <LandingPage/>
          </Route>
        </Switch>

    <SignUp/>
    </Router> */}
    </>
  );
}

export default App;