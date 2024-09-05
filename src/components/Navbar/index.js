import "./Navbar.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#bodyTecs">Tecnologias</a>
                </li>
                <li>
                    <a href="/">Projetos</a>
                </li>
            </ul>

            <ul className="medias">
                <li>
                    <a
                        href="https://www.linkedin.com/in/junior-souza-83896b210/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Thejuniorsouza"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <AiFillGithub size={30} />{" "}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
