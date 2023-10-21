import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import 

function App() {
  return (
    <>
    <Router>
      <Switch>
      {/* <Route exact path = "/Card">
        <Card>
      </Route> */}
      <Route exact path="/SignIn">
        <SignIn />
        </Route>

        <Route exact path="/SignUp">
        <SignUp />
        </Route>

        <Route exact path ="/">
        <LandingPage/>
        </Route>

      </Switch>
      </Router>
    </>
  );
}

export default App;
