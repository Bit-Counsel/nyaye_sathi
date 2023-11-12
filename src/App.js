import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/Pages/LandingPage";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import ServicesPage from "./components/Pages/ServicesPage";
import CommunityForumsPage from "./components/Pages/CommunityForumsPage"
import Error404 from "./components/Pages/Error404"

import Card from "./components/small-components/Card";
import Gridbox from "./components/small-components/Gridbox";
import Test from "./components/small-components/test";
import SidebarForums from "./components/small-components/SidebarForums";
import Navbar from "./components/small-components/Navbar";
import SearchBar from "./components/small-components/SearchBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<LandingPage />}></Route>
          <Route path="/SignIn" element ={<SignIn />}></Route>
          <Route path="/SignUp" element ={<SignUp />}></Route>
          <Route path="/ServicesPage" element ={<ServicesPage />}></Route>
          <Route path="/Navbar" element ={<Navbar/>}></Route>
          <Route path="/CommunityForumsPage" element ={<CommunityForumsPage/>}></Route>
          <Route path="/SidebarForums" element ={<SidebarForums/>}></Route>
          <Route path="/Navbar" element ={<Navbar/>}></Route>
          <Route path="/SearchBar" element ={<SearchBar/>}></Route>
          {/* <Route path="/Error404" element ={<Error404/>}></Route> */}
          <Route path = '*' element = {<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
