import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  //const Loading = () => {
  //  return <>Loading....</>;
  //};
  const filteredProduct=(catgry)=>{
    const updatedList=data.filter((x)=>x.category===catgry);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filteredProduct("men's clothing")}>Men's clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filteredProduct("women's clothing")}>
            Women's clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filteredProduct("jewelery")}>Jewelary</button>
          <button className="btn btn-outline-dark" onClick={()=>filteredProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 class="card-title">
                      {product.title}
                      </h5>
                    <p className="card-text fw-bold lead">${product.price}</p>
                    <NavLink to={'/Products/'+product.id} className="btn btn-outline-dark">
                      BUY NOW
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest Products...
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
        { <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
