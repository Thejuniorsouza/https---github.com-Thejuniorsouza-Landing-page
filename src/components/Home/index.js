import "./Home.css";

const Home = (props) => {
    return (
        <div className="home">
            <div className="text">
                <h1>Junior Souza</h1>
                <a href="a">
                    A propriedade CSS width determina a largura da área de
                    conteúdo de um elemento. A área de conteúdo fica dentro do
                    preenchimento, da borda, e da margem de um elemento.
                </a>
            </div>
            <div className="img">
                <img
                    src="https://www.github.com/Thejuniorsouza.png"
                    alt="Foto de perfil"
                ></img>
            </div>
        </div>
    );
};
export default Home;
