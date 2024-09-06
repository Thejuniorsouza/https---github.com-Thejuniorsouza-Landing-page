import React from "react";

function Button(props) {
    return (
        <div className="btn">
            <button
                style={{ backgroundColor: props.color, padding: "10px 15px" }}
                onClick={props.onClick}
                href={props}
                target="_blank"
            >
                {props.text}
            </button>
        </div>
    );
}

export default Button;
