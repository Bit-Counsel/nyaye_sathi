import React from "react";
import "./componentsCSS/Card.css";
import Navbar from "./Navbar";
import Card from "./Card";
import "./componentsCSS/gridbox.css"
function Gridbox() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grids">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default Gridbox;
