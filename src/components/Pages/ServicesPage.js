import React from 'react'
import "../componentsCSS/ServicesPage.css"
import Card from "../small-components/Card"
import Gridbox from "../small-components/Gridbox";
import Navbar from "../small-components/Navbar"
function ServicesPage() {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar />
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