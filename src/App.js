import React, { useState, useEffect } from "react"; // Importe o useState e o useEffect do React
import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
import GitHubProjects from "./components/GitHubProjects/GitHubProjects.js";
import Pagination from "./components/GitHubProjects/Pagination.js";

function App() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Defina o número de cartões por página aqui.

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/thejuniorsouza/repos?page=${currentPage}&per_page=${itemsPerPage}`
                );

                if (!response.ok) {
                    throw new Error("Erro ao buscar os projetos do GitHub");
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setProjects(data);
                } else {
                    throw new Error("A resposta da API não é um array");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, [currentPage]);

    return (
        <div className="App">
            <div class="homePage">
                <Navbar />
                <Home />
            </div>
            <main>
                <div className="project-cards">
                    {projects.map((project) => (
                        <GitHubProjects key={project.id} project={project} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(projects.length / itemsPerPage)}
                    onPageChange={setCurrentPage}
                />
            </main>
        </div>
    );
}

export default App;
