import React from "react";
import "./Style.css";
import Button from "../Button/Button";

function Details({ title, description, repoLink, liveLink }) {
    return (
        <div className="detailsContainer">
            <h2>{title}</h2>
            <div className="detailContent">
                <p className="textDetail">{description}</p>
                <div className="details-buttons">
                    <Button
                        color="gray"
                        text="Repositório"
                        onClick={() => window.open(repoLink, "_blank")}
                        className="btn"
                    />
                    <Button
                        text="Ver Projeto"
                        color="#007BFF"
                        onClick={() => window.open(liveLink, "_blank")}
                        className="btn"
                    />
                </div>
            </div>
        </div>
    );
}

export default Details;
