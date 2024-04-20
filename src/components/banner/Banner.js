import banner3 from '../Assests/banner3.jpg'
import banner1 from '../Assests/banner1.jpg'
import banner2 from '../Assests/banner2.jpg'

function Banner() {
  return (
    <>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner3} className="d-block w-100" alt="..." height={400} />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder">Flash sale</h5>
                <p>wooowww offer,......</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." height={400} />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder">Black Friday</h5>
                <p>kids wear upt0 50% off.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={banner1} className="d-block w-100" alt="..." height={400} />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bolder">White wendesday</h5>
                <p>Ladies wear 50-60% off/-.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
