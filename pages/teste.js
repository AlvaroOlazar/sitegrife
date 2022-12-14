export default function Teste (){
    return(
      <div class="container">
        <div class="card1">
          <div class="row">
            <aside class="col-sm-5 border-right">
        <article class="gallery-wrap"> 
        <div class="img-big-wrap imagem-produto">
          <div> <a href="#"><img src="https://i.pinimg.com/736x/d9/ba/85/d9ba85ea5b4a82a0870d7c2e54d27b48.jpg" style={{widht: "500px", height: "500px"}}></img></a></div>
        </div> 
        </article> 
            </aside>

            <aside class="col-sm-7">
        <article class="card-body p-5">
          <h3 class="title mb-3">Original Version of Some product name</h3>

        <p class="price-detail-wrap"> 
          <span class="price h3 text-warning"> 
            <span class="currency">US $</span><span class="num">1299</span>
          </span> 
          <span>/per kg</span> 
        </p> 
        <dl class="item-property">
          <dt>Description</dt>
          <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco </p></dd>
        </dl>
        <dl class="param param-feature">
          <dt>Model#</dt>
          <dd>12345611</dd>
        </dl>  
        <dl class="param param-feature">
          <dt>Color</dt>
          <dd>Black and white</dd>
        </dl> 
        <dl class="param param-feature">
          <dt>Delivery</dt>
          <dd>Russia, USA, and Europe</dd>
        </dl>  

      <hr></hr>
	<div class="row">
		<div class="col-sm-5">
			<dl class="param param-inline">
			  <dt>Quantity: </dt>
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
				  <dt>Size: </dt>
				  <dd>
				  	<label class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
					  <span class="form-check-label">SM</span>
					</label>
					<label class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
					  <span class="form-check-label">MD</span>
					</label>
					<label class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
					  <span class="form-check-label">XXL</span>
					</label>
				  </dd>
			</dl>  
		</div> 
	</div> 
	<hr></hr>
	<a href="#" class="btn btn-lg btn-primary text-uppercase"> Buy now </a>
	<a href="#" class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Add to cart </a>
</article> 
		</aside> 
	</div>  
</div> 
</div>
    )
}