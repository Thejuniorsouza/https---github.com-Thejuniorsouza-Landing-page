import React from "react";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";
import FoodScriptImage from "../../assets/FoodScript.jpeg";

const FoodScript = () => {
    return (
        <GridProject image={FoodScriptImage}>
            <Details
                title="FoodScript"
                description="Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado."
                repoLink="https://github.com/IanMouraF/TrabalhoNuvem"
                liveLink="/"
            />
        </GridProject>
    );
};

export default FoodScript;
