import masculinoC from "./img/masculino.png"
import femininoC from "./img/femininoC.jpg"
import joiasC from "./img/joiasC.jpg"
import Image from "next/image"

export const Carousel = () => {
    return(
        <>
            <div class="row d-flex justify-content-center">
    <div id="myCarousel" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
          <div class="carousel-item active">
            <Image width="100%" height="100%" src={masculinoC} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Imagem Ciclista"></Image>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          </div>

          <div class="carousel-item">
            <Image width="100%" height="100%" src={femininoC} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Imagem Ciclista"></Image>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
          </div>

          <div class="carousel-item">
            <Image width="100%" height="100%" src={joiasC} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Imagem Ciclista"></Image>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
          </div>
        </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
          </>
    )
}