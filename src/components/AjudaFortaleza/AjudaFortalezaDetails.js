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
                description="AjudaFortaleza é um projeto acadêmico dedicado a conectar pessoas e organizações que buscam contribuir com causas sociais em Fortaleza. O site oferece um catálogo completo de ONGs locais, permitindo que os usuários descubram, conheçam e se envolvam com instituições que fazem a diferença na cidade. Com informações detalhadas sobre as áreas de atuação, necessidades de voluntariado e opções de doações, o AjudaFortaleza facilita o engajamento da comunidade em ações solidárias. A plataforma também serve como um ponto de encontro para quem deseja promover ou apoiar campanhas sociais, ajudando a fortalecer a rede de apoio e assistência na região."
                repoLink="https://github.com/Thejuniorsouza/AjudaFortalezaApp"
                liveLink="https://ajuda-fortaleza-app.vercel.app/"
            />
        </GridProject>
    );
};

export default AjudaFortalezaDetails;
