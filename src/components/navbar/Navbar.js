import './Navbar.css'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="zaranavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            ZARA STORE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="buttons ">
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  Login
                </NavLink>
               < NavLink to="/register" className="btn btn-outline-dark m-2">
                  Register
                </NavLink>
                <NavLink to="/Cart" className="btn btn-outline-dark">
                  Cart(0)
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
