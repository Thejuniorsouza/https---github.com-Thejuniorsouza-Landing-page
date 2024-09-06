import React from "react"; // Importe o useState e o useEffect do React
import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
import Tecnologies from "./components/Tecnologies/index.js";
import GitHubProjectSection from "./components/GitHubProjects/GitHubProjects.js";
// import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <div className="App">
            <div className="homePage">
                <Navbar />
                <Home />
                <Tecnologies />
                <GitHubProjectSection />
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;
