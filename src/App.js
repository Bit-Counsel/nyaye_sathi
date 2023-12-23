import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/Pages/LandingPage";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import ServicesPage from "./components/Pages/ServicesPage";
import CommunityForumsPage from "./components/Pages/CommunityForumsPage"
import Error404 from "./components/Pages/Error404"

import SidebarForums from "./components/small-components/SidebarForums";
import Sidebar from "./components/small-components/Sidebar";
import Navbar from "./components/small-components/Navbar";
import SearchBar from "./components/small-components/SearchBar";
import Questions from "./components/small-components/Questions";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pages */}
          <Route path="*" element ={<LandingPage />}></Route>
          <Route path="/SignIn" element ={<SignIn />}></Route>
          <Route path="/SignUp" element ={<SignUp />}></Route>
          <Route path="/ServicesPage" element ={<ServicesPage />}></Route>
          <Route path="/CommunityForumsPage" element ={<CommunityForumsPage/>}></Route>
          <Route path = '*' element = {<Error404/>}/>
          


        {/* Components */}
          <Route path="/SearchBar" element ={<SearchBar/>}></Route>
          <Route path="/Sidebar" element ={<Sidebar/>}></Route>
          <Route path="/SidebarForums" element ={<SidebarForums/>}></Route>
          <Route path="/Questions" element ={<Questions/>}></Route>
          <Route path="/Navbar" element ={<Navbar/>}></Route>




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
