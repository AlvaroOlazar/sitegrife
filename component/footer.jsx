export const Footer = () => {
    return(
        <>
        <footer className="rodape">
        <div className="container-footer">
            <div className="row-footer">
                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> política de privacidade </a></li>
                        <li><a href=""> programa de afiliados</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Transporte</a></li>
                        <li><a href="#">devoluções</a></li>
                        <li><a href="#">Status De Pedido</a></li>
                        <li><a href="#">Opções De Pagamento</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Loja online</h4>
                    <ul>
                        <li><a href="#">Relógio</a></li>
                        <li><a href="#">Saco</a></li>
                        <li><a href="#">Calçado</a></li>
                        <li><a href="#">Endereço</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Se subescreva!</h4>
                    <div className="form-sub">
                        <form>
                            <input type="email" placeholder="Digite o seu e-mail" required></input>
                            <button>subscrever</button>
                        </form>
                    </div>

                    <div className="medias-socias">
                        <a href="#"> <i className="fa-brands fa-facebook" style={{fontSize: '20px'}}></i> </a>
                        <a href="#"> <i className="fa-brands fa-instagram" style={{fontSize: '20px'}}></i> </a>
                        <a href="#"> <i className="fa-brands fa-twitter" style={{fontSize: '20px'}}></i> </a>
                        <a href="#"> <i className="fa-brands fa-linkedin" style={{fontSize: '20px'}}></i> </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    </>
    )
}