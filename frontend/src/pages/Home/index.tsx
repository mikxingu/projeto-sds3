import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acesse agora
                    </Link>
                    <p></p>

                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Atenção!</strong> Por se tratar de um site hospedado numa nuvem gratuita, aguardar alguns
                        instantes para que o serviço do banco de dados inicie e então os dados dos gráficos serão exibidos. 
                        Obrigado.

                        
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
