import React from "react";

import "@css/SidebarBtn.css";

function SidebarBtn(props) {
    return (
        <>
            <div className={`sidebar-button ${props.BtnTextSize}`}>
                {props.BtnText}
            </div>
        </>
    );
}

export default SidebarBtn;
