import React from "react";

import "@css/InputText.css";

interface IProps {
    input_text: string;
    className?: string;
}

function InputText(props: IProps) {
    return <div className={props.className}>{props.input_text}</div>;
}

export default InputText;
