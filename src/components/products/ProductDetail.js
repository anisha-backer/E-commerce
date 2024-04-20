import React,{useState,useEffect, useContext} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';

function ProductDetail() {
       
    const params=useParams();
    const prId=params.ProductId;
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const getProduct = async()=>{
            setLoading(true);
            const response=await fetch('https://fakestoreapi.com/products/'+prId);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    },[])

    const {addtocart}=useContext(AppContext);
    

    const ShowProducts=()=>{
        return(
            <>
            <div className='col-md-6 mt-3'>
                <img src={product.image} alt={product.title} height={400} width={300}/>
            </div>
            <div className='col-md-6 mt-4 p-4 mb-3'>
                <h4 className='text-uppercase'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}
                </h1>
                <p className='lead fw-bolder'>Rating {product.rating &&product.rating.rate} </p>
                <h3 className='display-6 fw=bolder my-5'>$ {product.price}</h3>
               <p className='lead'>{product.description}</p>
               <button onClick={()=>{addtocart(product)}} className="btn btn-outline-dark me-2">ADD TO CART</button>
               <NavLink to="/Cart" className="btn btn-outline-dark me-2 ">GO TO CART</NavLink>
            </div>

            </>
        )
    }

  return (
    <div>
      <div className='container'>
        <div className='row'>
            {<ShowProducts/>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
