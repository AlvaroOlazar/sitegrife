import axios from "axios"
import { Nav } from '../../component/navbar'
import { Footer } from '../../component/footer'    

export default function Profile({store = {}}){
    return(
    <>
        <Nav></Nav>
        <div class="container">
            <div class="card1">
                <div class="row">
                    <aside class="col-sm-5 border-right">
                        <article class="gallery-wrap"> 
                            <div class="img-big-wrap imagem-produto" style={{display:"flex" ,justifyContent: "center", alignItems: "center"}}>
                                <div> <a href="#"><img src={store.image} style={{widht: "0", height: "300px"}}></img></a></div>
                            </div> 
                        </article> 
                    </aside>
                    <aside class="col-sm-7">
                        <article class="card-body p-5">
                            <h3 class="title mb-3">{store.title}</h3>
                                <p class="price-detail-wrap"> 
                    <span class="price h3 text-warning"> 
                    <span class="currency">US $</span><span class="num">{store.price}
                    </span>
                    </span> 
                    </p> 
                    <dl class="item-property">
                        <dt>Descrição</dt>
                            <dd><p>{store.description}</p></dd>
                    </dl>
                    <dl class="param param-feature">
                        <dt>Categoria</dt>
                        <dd>{store.category}</dd>
                    </dl>  

                    <br></br>
                    <br></br>   
                    
                    <hr></hr>

        <div class="row">
            <div class="col-sm-5">
                <dl class="param param-inline">
                    <dt>Quantidade: </dt>
                        <dd>
                            <select class="form-control form-control-sm" style={{width:"70px"}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                        </dd>
                    </dl>  
                </div> 
            <div class="col-sm-7">
                <dl class="param param-inline">
                    <dt>Tamanho: </dt>
                        <dd>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <span class="form-check-label">1</span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <span class="form-check-label">2</span>
                            </label>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                        <span class="form-check-label">3</span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <span class="form-check-label">4</span>
                            </label>
                            <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <span class="form-check-label">5</span>
                            </label>
                            </dd>
                        </dl>  
                    </div> 
                </div> 

                <hr></hr>
                
                <a href="#" class="btn btn-lg btn-primary text-uppercase"> Compre agora </a>
                <a href="#" class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Adicione ao carrinho </a>

                        </article> 
                    </aside> 
                </div>  
            </div> 
        </div>
        <Footer></Footer>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await axios.get (
        `https://fakestoreapi.com/products/` + context.params.id
    );

    const store = await response.data;
    return {
      props: {store},
    }
  }

  export async function getStaticPatchs() {
    const response = await axios.get (
        `https://fakestoreapi.com/products/`
    );
    const stores = await response.data;
    const patchs = stores.map((store) => {
        return {params: {id:String(user.id)}};
    });
    return{
        paths:[
            { params: {id: '1'} },
            { params: {id: '2'} },
        ],
        fallback: true,
    }
  }