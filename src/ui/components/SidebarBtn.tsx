import React from "react";

import "@css/SidebarBtn.css";

interface IProps {
    BtnText: string;
    BtnTextSize?: string;
}

function SidebarBtn(props: IProps) {
    return (
        <>
            <div className={`sidebar-button ${props.BtnTextSize}`}>
                {props.BtnText}
            </div>
        </>
    );
}

export default SidebarBtn;
