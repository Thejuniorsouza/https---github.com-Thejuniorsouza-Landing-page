import React from "react";
import bibliotecaOnline from "../../assets/bibliotecaOnline.png";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";

const BibliotecaOnline = () => {
    return (
        <GridProject image={bibliotecaOnline}>
            <Details
                title="Biblioteca Online"
                description="Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado.Este projeto visa conectar pessoas em Fortaleza para voluntariado."
                repoLink="https://github.com/jonathashnr/livrosapp"
                liveLink="/"
            />
        </GridProject>
    );
};

export default BibliotecaOnline;
