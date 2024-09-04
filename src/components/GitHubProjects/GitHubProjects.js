import React from "react";
import "./GitHubProjects.css";
import { AiFillGithub } from "react-icons/ai";

function GitHubProjectCard({ project }) {
    return (
        <div className="project-card">
            <section className="svg">
                <AiFillGithub />
                <h3>{project.name}</h3>ß
            </section>
            <p>{project.description}</p>
            <a
                href={project.ˇhtml_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver no GitHub
            </a>
        </div>
    );
}

export default GitHubProjectCard;
