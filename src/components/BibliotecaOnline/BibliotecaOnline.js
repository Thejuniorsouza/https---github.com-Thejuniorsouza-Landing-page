import React from "react";
import bibliotecaOnline from "../../assets/bibliotecaOnline.png";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";

const BibliotecaOnline = () => {
    return (
        <GridProject image={bibliotecaOnline}>
            <Details
                title="Estante de livros"
                description="Estante de livros é um projeto acadêmico projetado para ajudar os amantes de livros a organizar suas leituras de forma simples e eficiente. Através do site, os usuários podem cadastrar livros que já leram, estão lendo ou planejam ler. Cada livro pode ser classificado com notas. Além disso, os usuários têm a possibilidade de escrever resenhas pessoais, registrando suas impressões e opiniões sobre cada obra. Com uma interface amigável e intuitiva, o Estante de livros permite aos leitores acompanhar seu progresso literário. O objetivo do site é transformar o hábito da leitura em uma experiência mais organizada e interativa, permitindo que o usuário mantenha um histórico completo de suas leituras e descobertas literárias."
                repoLink="https://github.com/jonathashnr/livrosapp"
                liveLink="/"
            />
        </GridProject>
    );
};

export default BibliotecaOnline;
