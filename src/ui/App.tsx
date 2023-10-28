import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@pages/LandingPage";
import SignUp from "@pages/SignUp";
import SignIn from "@pages/SignIn";
import ServicesPage from "@pages/ServicesPage";
import CommunityForumsPage from "@pages/CommunityForumsPage";

import Navbar from "@components/Navbar";
import SidebarForums from "@components/SidebarForums";
import SearchBar from "@components/SearchBar";
import NewNavbar from "@components/NewNavbar";
import Card from "@components/Card";
import Gridbox from "@components/Gridbox";

import "@css/App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/SignIn" element={<SignIn />}></Route>
                    <Route path="/SignUp" element={<SignUp />}></Route>
                    <Route
                        path="/ServicesPage"
                        element={<ServicesPage />}
                    ></Route>
                    <Route path="/Navbar" element={<Navbar />}></Route>
                    <Route
                        path="/CommunityForumsPage"
                        element={<CommunityForumsPage />}
                    ></Route>

                    <Route path="/SearchBar" element={<SearchBar />}></Route>

                    <Route
                        path="/SidebarForums"
                        element={<SidebarForums />}
                    ></Route>

                    <Route path="/NewNavbar" element={<NewNavbar />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
