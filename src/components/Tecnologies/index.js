import "./Tecnologies.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiRubyRough } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Tecnologies = (props) => {
    return (
        <section>
            <div className="bodyTecs" id="bodyTecs">
                <h1 className="titleTecs">Tecnologias</h1>
                <div className="tecs">
                    <div className="html">
                        <AiFillHtml5 size={50} color="#9c9c9c" /> <h3>HTML5</h3>
                    </div>
                    <div className="css">
                        {" "}
                        <IoLogoCss3 size={50} color="#9c9c9c" /> <h3>CSS3</h3>
                    </div>
                    <div className="git">
                        <FaGitAlt size={50} color="#9c9c9c" /> <h3>Git</h3>
                    </div>
                    <div className="javascript">
                        {" "}
                        <RiJavascriptFill size={50} color="#9c9c9c" />
                        <h3>Javascript</h3>
                    </div>
                    <div className="ruby">
                        <DiRubyRough size={50} color="#9c9c9c" />
                        <h3>Ruby</h3>{" "}
                    </div>
                    <div className="java">
                        <FaJava size={50} color="#9c9c9c" />
                        <h3>Java</h3>{" "}
                    </div>
                    <div className="react">
                        <FaReact size={50} color="#9c9c9c" />
                        <h3>React.js</h3>{" "}
                    </div>
                    <div className="mongodb">
                        <SiMongodb size={50} color="#9c9c9c" /> <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tecnologies;
