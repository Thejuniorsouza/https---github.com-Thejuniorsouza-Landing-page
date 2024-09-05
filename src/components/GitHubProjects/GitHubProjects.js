import React from "react";
import "./GitHubProjects.css";
// import imgCard1 from "../../assets/previewCard1.png";
// import Button from "../Button/Button";
// import { FaGithub } from "react-icons/fa6";
import AjudaFortalezaDetails from "../AjudaFortaleza/AjudaFortalezaDetails";
import BibliotecaOnline from "../BibliotecaOnline/BibliotecaOnline";
import FoodScript from "../FoodScript/FoodScript";

const GitHubProjectSection = () => {
    return (
        <div className="github-projects">
            <section className="headerProject">
                <div class="custom-shape-divider-top-1725571618">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
                <h1>Meus projetos</h1>
                <AjudaFortalezaDetails />

                <section class="page">
                    <hr class="dashed-divider" />
                </section>

                <BibliotecaOnline />

                <section class="page">
                    <hr class="dashed-divider" />
                </section>

                <FoodScript />
            </section>
        </div>
    );
};

// SEGUNDA TENTATIVA DE CÓDIGO -----------------------------
// function GitHubProjectSection({ project }) {
//     const handleClick = () => {
//         alert("Botão apertado!");
//     };
//     return (
// <div>
//     <GridProject
//         coluna1={imagemAjuda}
//         coluna2={ajudaFortalezaDetails}
//     />
//     <GridProject coluna1={detailsX}} coluna2={imagemX}/>
//     <GridProject coluna1={imagem}} coluna2={detail}/>
// </div>

// CÓDIGO ORIGINAL --------------------------------------
// <div className="parent">
//     <div className="imgCard1">
//         <a
//             href="https://ajuda-fortaleza-app.vercel.app/"
//             target="_blank"
//             rel="noreferrer"
//         >
//             <img src={imgCard1} alt="projeto"></img>
//         </a>
//     </div>

//     <div className="textCard1">
//         <p>
//             Lorem Ipsum is simply dummy text of the printing and
//             typesetting industry. Lorem Ipsum has been the industry's
//             standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a
//             type specimen book. It has survived not only five centuries,
//             but also the leap into electronic typesetting, remaining
//             essentially unchanged.
//         </p>
//         <div className="btn-card">
//             <Button
//                 color="blue"
//                 icon={FaGithub}
//                 onClick={handleClick}
//                 text="Site"
//                 id="btn btn-site"
//             />
//             <Button
//                 color="gray"
//                 onClick={handleClick}
//                 text="GitHub"
//                 id="btn btn-github"
//             />
//         </div>
//     </div>

/* <div className="textCard2"> </div>
            <div className="imgCard2"> </div>
            <div className="imgCard3"> </div>
            <div className="textCard3"> </div> */

// </div>
//     );
// }

export default GitHubProjectSection;
