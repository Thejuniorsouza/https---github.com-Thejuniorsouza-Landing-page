import React from "react";
import Details from "../utils/Details";
import ajudaImage from "../../assets/ajudaImage.png";
import GridProject from "../utils/GridProject.js";
// import ajudaImage from "./AjudaFortalezaImg";

const AjudaFortalezaDetails = () => {
    return (
        <GridProject image={ajudaImage}>
            <Details
                title="AjudaFortaleza"
                description="Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado."
                repoLink="https://github.com/Thejuniorsouza/AjudaFortalezaApp"
                liveLink="ajuda-fortaleza-app.vercel.app"
            />
        </GridProject>
    );
};

export default AjudaFortalezaDetails;
