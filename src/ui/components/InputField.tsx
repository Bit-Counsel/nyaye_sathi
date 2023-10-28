import React from "react";

import "@css/InputField.css";

interface IProps {
    input_box: string;
}

function InputField(props: IProps) {
    return <input type="text" id="" className={props.input_box} />;
}

export default InputField;
