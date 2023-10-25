import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter , Route, Routes } from "react-router-dom";
// import

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
