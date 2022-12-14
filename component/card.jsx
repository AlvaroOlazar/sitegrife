import Link from "next/link";
import Image from "next/image";

export const Card = () =>{
    return(
        <>
            <div className="container">
            <div className="card">
                <div className="img-i1">
                    <span>
                        <Link className="mens" href="/mens" style={{fontFamily:"Poppins', sans-serif"}}>Homens</Link> 
                    </span>
                </div>

                <div className="content">
                    <span className="title">Roupas masculinas</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>
                
            <div className="card">
                <div className="img-i2">
                    <span>
                        <Link className="womens" href="/womens" style={{fontFamily:"Poppins', sans-serif"}}>Mulheres</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Roupas femininas</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

            <div className="card">
                <div className="img-i3">
                    <span>
                        <Link className="jewerely" href="/jewelery" style={{fontFamily:"Poppins', sans-serif"}}>Joias</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Anéis</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

            <div className="card">
                <div className="img-i4">
                    <span>
                        <Link className="tecnologic" href="/tecnologic" style={{fontFamily:"Poppins', sans-serif"}}>Tecnologia</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Tecnologia</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

        </div>
        </>
    )

}