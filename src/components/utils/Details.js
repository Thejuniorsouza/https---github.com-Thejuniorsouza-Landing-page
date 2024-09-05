import React from "react";
import "./Style.css";
import Button from "../Button/Button";
// import { FaGithub } from "react-icons/fa6";

function Details({ title, description, repoLink, liveLink }) {
    return (
        <div className="detailsContainer">
            <h2>{title}</h2>
            <div className="detailContent">
                <p className="textDetail">{description}</p>
                <div className="details-buttons">
                    <Button
                        color="#007BFF"
                        text="Repositório"
                        onClick={() => (window.location.href = repoLink)}
                        id="btn btn-site"
                        className="btn"
                    />
                    <Button
                        text="Ver Projeto"
                        color="#28A745"
                        onClick={() => (window.location.href = liveLink)}
                        id="btn btn-github"
                        className="btn"
                    />
                </div>
            </div>
        </div>
    );
}

export default Details;
