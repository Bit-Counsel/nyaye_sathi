import React from "react";

import "@css/InputText.css";

function InputText({ input_text, className }) {
    return <div className={className}>{input_text}</div>;
}

export default InputText;
