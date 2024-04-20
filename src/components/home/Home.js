import React from 'react'
import jacket from '../Assests/la2.jpg'
import ladispr from '../Assests/la3.jpg'
import ladispr1 from '../Assests/la4.jpg'
import men1 from '../Assests/image2.webp'
import men2 from '../Assests/image3.webp'
import men3 from '../Assests/image4.webp'
import men4 from '../Assests/image5.webp'
import men5 from '../Assests/image6.webp'
import kid1 from '../Assests/kid4.webp'
import kid2 from '../Assests/ki2.webp'
import kid3 from '../Assests/kidshol.webp'
import kid4 from '../Assests/kidh.webp'
function Home() {
  return (
   <div>
<div className="container">
          <h2 style={{color:"red"}} className="text-dark fw-bold text-center pt-5 pb-5">
            Today's Deals
          </h2>
          <hr/>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded h-100">
                <img src={jacket} className="card-img-top" alt="" height={250} />
                <div className="card-body">
                  <h3 className="card-title">Fort Collins</h3>
                  <p className="card-text">
                  Womens Jacket
                  </p>
                  <p><b>₹1,281 M.R.P: <strike>₹3,050</strike> (58% off)</b></p>
                  <h6>FREE Delivery by ZARA</h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={ladispr} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">PLADO</h3>
                  <p className="card-text">
                  Women's and Girls Printeed Jacket
                  </p>
                  <button className="btn btn-danger p-0 fs-6">Deal of the day </button>
                  <p><b>₹499 M.R.P: <strike>₹1199</strike> (58% off)</b></p>
                 
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={ladispr1} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">Istyle Can</h3>
                  <p className="card-text">
                   Women Sleeveless Jacket
                  </p>
     
                  <p><b>₹349 M.R.P: <strike>₹999</strike> (65% off)</b></p>
                  <h6>More Buying Choices</h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={men1} className="card-img-top" alt="" height={250} />
                <div className="card-body">
                  <h3 className="card-title">Jack And Jones</h3>
                  <p className="card-text">
                   Half Sleeve Top for men
                  </p>
                  
                  <p><b>₹699 M.R.P: <strike>₹1599</strike> (56% off)</b></p>
                  <h6>FREE Delivery over ₹499. </h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="container mt-4">
          <div className="row g-5">
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={men2} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">Eagle American</h3>
                  <p className="card-text">
                  Men's Half sleeve 
                  </p>
                  <p><b>₹799 M.R.P: <strike>₹3499</strike> (77% off)</b></p>
                  <h6>FREE Delivery over ₹899. </h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={men3} className="card-img-top" alt="" height={250} />
                <div className="card-body">
                  <h3 className="card-title">Denim</h3>
                  <p className="card-text">
                  Denim jeens
                  </p>
                  <p><b>₹999 M.R.P:<strike>₹1299</strike>(30% off)</b></p>
                  <h6>FREE Delivery over ₹1399. </h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={men4} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">ADIDAS</h3>
                  <p className="card-text">
                  Men's ADIDAS Sports tshirt
                  </p>
                  <p><b>₹649 M.R.P:<strike>₹2399</strike>(73% off)</b></p>
                  <h6>More Buying Choices</h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 ">
              <div className="card shadow-sm border-0 rounded">
                <img src={men5} className="card-img-top" alt="" height={250} />
                <div className="card-body">
                  <h3 className="card-title">ADIDAS</h3>
                  <p className="card-text">
                  Men's  tshirt
                  </p>
                  <button className="btn btn-danger p-0 fs-6">Deal of the day </button>
                  <p><b>₹849 M.R.P: <strike>₹1999</strike> (75% off)</b></p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row g-5">
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={kid1} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">Frok</h3>
                  <p className="card-text">
                  Girls Cotton fullsleev frok
                  </p>
                  <button className="btn btn-danger p-0 fs-6">Deal of the day </button>
                  <p><b>₹349 M.R.P:<strike>₹1599</strike>(75% off)</b></p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={kid2} className="card-img-top" alt="" height={250} />
                <div className="card-body">
                  <h3 className="card-title">Gwon</h3>
                  <p className="card-text">
                  Girl's Full Gwon
                  </p>
                  <p><b>₹699 M.R.P: <strike>₹1099</strike> (75% off)</b></p>
                  <h6>FREE Delivery by ZARA. </h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="card shadow-sm border-0 rounded">
                <img src={kid3} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">Gini & Jony</h3>
                  <p className="card-text">
                  Light shoes
                  </p>
                  <p><b>₹999 M.R.P: <strike>₹1999</strike> (67% off)</b></p>
                  <h6>FREE Delivery by ZARA. </h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 ">
              <div className="card shadow-sm border-0 rounded">
                <img src={kid4} className="card-img-top" alt="" height={250}  />
                <div className="card-body">
                  <h3 className="card-title">Avengers</h3>
                  <p className="card-text">
                  Boys Printed  Jacket with Button
                  </p>
                  <p><b>₹999 M.R.P: <strike>₹1999</strike> (67% off)</b></p>
                  <h6>More Buying Choices</h6>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
