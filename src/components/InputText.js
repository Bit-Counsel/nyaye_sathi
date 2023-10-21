import React from 'react'
import "./componentsCSS/InputText.css"
function InputText({input_text, className}) {
  return (
    <div className={className}>{input_text}</div>
  )
}

export default InputText