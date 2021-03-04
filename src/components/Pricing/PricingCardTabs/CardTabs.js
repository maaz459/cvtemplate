import React from 'react';
import './CardTabs.css'
const CardTabs = (props) => {
    return (
        <div className="alignChange">
            <div className={props.checkPage === "home" ? "mainBorder home" : "mainBorder pricing"} >
                <div className="firstCategoryDiv">
                    <span className="firstCategory">Monthly</span>
                </div>
                <div className="innerBorder">
                    Quartely <span style={{ color: "#229954" }}>-33%</span>
                </div>
            </div></div>
    );
}

export default CardTabs;