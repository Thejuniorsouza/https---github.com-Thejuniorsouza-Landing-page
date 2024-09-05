import React from "react";

function Button(props) {
    return (
        <div className="btn">
            <a
                style={{ backgroundColor: props.color, padding: "10px 15px" }}
                onClick={props.onClick}
                href="/"
            >
                {props.text}
                {props.icon}
            </a>
        </div>
    );
}

export default Button;
