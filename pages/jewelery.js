import React from "react"
import axios from "axios"
import Link from "next/link";
import { Nav } from '../component/navbar'
import { Footer } from '../component/footer'
  
export default function Fake({fakestore}) {
  return (
    <>
    <Nav></Nav>
    <div className="container mt-5">
          <div className="row">
  
          <div className="col-md-4">
              <section>
                <section id="filters" data-auto-filter="true">
                  <h5>Filters</h5>
                  <section className="mb-4" data-filter="condition">
                    <h6 className="font-weight-bold mb-3">Condition</h6>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="new" id="condition-checkbox"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="condition-checkbox">
                        New
                      </label>
                    </div>
  
                     <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="used" id="condition-checkbox2"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="condition-checkbox2">
                        Used
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="collectible" id="condition-checkbox3"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="condition-checkbox3">
                        Collectible
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="renewed" id="condition-checkbox4"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="condition-checkbox4">
                        Renewed
                      </label>
                    </div>
                  </section>
  
  
                  <section class="mb-4">
                    <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>
                    <div className="rating" data-toggle="rating" id="filter-rating" tabindex="0">
                      <p>
                        <i class="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="1"></i>
                      </p>
                      <p>
                        <i class="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="2"></i>
                      </p>
                      <p>
                        <i class="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="3"></i>
                      </p>
                      <p>
                        <i class="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="4"></i>
                      </p>
                      <p>
                        <i class="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="5"></i>
                      </p>
                    </div>
                  </section>
  
                  <section className="mb-4">
                    <h6 className="font-weight-bold mb-3">Price</h6>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-radio">
                        Under $25
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio2"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-radio2">
                        $25 to $50
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio3"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-radio3">
                        $50 to $100
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio4"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-radio4">
                        $100 to $200
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio5"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-radio5">
                        $200 &amp; above
                      </label>
                    </div>
                  </section>
  
  
                  <section className="mb-4" data-filter="size">
                    <h6 className="font-weight-bold mb-3">Size</h6>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="34" id="price-checkbox"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-checkbox">
                        34
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="36" id="price-checkbox2"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-checkbox2">
                        36
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="38" id="price-checkbox3"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-checkbox3">
                        38
                      </label>
                    </div>
  
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="40" id="price-checkbox4"></input>
                      <label className="form-check-label text-uppercase small text-muted" for="price-checkbox4">
                        40
                      </label>
                    </div>
                  </section>
                </section>
              </section>
            </div>
          <>
            <div className="col-md-8">
              <div className="row mb-4" id="content" style={{display: "flex"}}>
                  {fakestore.map((store) => (
                <div className="col-md-4 my-4 justify-content-center text-center animation fade-in" style={{marginRight: "140px", minHeight:"500px"}}>
                  <div className="bg-image hover-overlay hover-zoom hover-shadow ripple rounded">
                    <img src={store.image} className="img-fluid w-100" style={{height: "330px", width:"auto"}}></img>
                    <a href="#!">
                      <div className="mask rounded"></div>  
                    </a>
                  </div>
                  <div className="pt-4">
                  <p>
                    <Link key={store.id} href="/profile/[id]" as={`/profile/${store.id}`} style={{textDecoration: "none"}}>{store.title}</Link>
                  </p>
                    <strong>US $ {store.price}</strong>
                  </div>
                </div>
                ))}
                </div>
            </div>
          </>
          
        
        </div></div>
        <Footer></Footer>
          
        </>
    
  )
}
      export async function getServerSideProps(context) {
        const response = await axios.get( `https://fakestoreapi.com/products/category/jewelery`);
        const data = await response.data;
          return { 
            props: { fakestore:data }, 
          }
      }
            
      