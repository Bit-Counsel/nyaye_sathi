import React from 'react'
import Navbar from "../Navbar"
import "../componentsCSS/ServicesPage.css"
import Card from "../Card"
import Gridbox from "../Gridbox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function ServicesPage() {
  return (
    <>
    <Navbar/>
    <h1 className ="ques">Whom can we connect with you today?</h1>
    <Gridbox/>
    <div className="container-ServicesPage">
    
    <div className="services">
        
    </div>
    </div>
    </>
  )
}

export default ServicesPage