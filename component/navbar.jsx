import Image from "next/image"
import logomarca from "./img/logomarca.png"

export const Nav = () => {
        return(
            <>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/" style={{color: "white", marginLeft: "1%"}}><Image className="image" src={logomarca} width={60} height={60}></Image>TwoMore</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>Produtos
                                </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#!">Masculino</a></li>
                                <li><a className="dropdown-item" href="#!">Feminino</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#!">Joias</a></li>
                                <li><a className="dropdown-item" href="#!">Tecnologia</a></li>
                            </ul>
                                </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" style={{color: "white"}}>Sobre nós</a>
                            </li>    
                            </ul>
                                
                        </div>
                        </div>
                    </nav>
            </>
        )
    }

