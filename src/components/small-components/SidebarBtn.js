import React from 'react'
import "../componentsCSS/SidebarBtn.css"

function SidebarBtn(props) {
  return (
    <>
    <div className = {`sidebar-button ${props.BtnTextSize}`}>{props.BtnText}</div>
    </>
  )
}

export default SidebarBtn;

SidebarBtn.defaultProps = {
  BtnTextSize: "textLarge",
  BtnText: "text"
}