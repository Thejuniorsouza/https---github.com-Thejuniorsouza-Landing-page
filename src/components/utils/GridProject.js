import React from "react";
import "./Style.css";

function GridProject({ image, children }) {
    return (
        <div className="GridContainer">
            <div className="col1">
                <img src={image} alt="Project" />
            </div>
            <div className="col2">{children}</div>
        </div>
    );
}

export default GridProject;
