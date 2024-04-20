import { useContext } from "react";
import './Cart.css'
import AppContext from "../../context/AppContext";

function Cart() {
    const {selectedProduct}=useContext(AppContext);
    console.log("cart page",selectedProduct);
    
    return ( 
        <>
        <div className='container mt-5' style={{minHeight: '60vh'}}>
            <div className='cart-header fs-2 fw-semibold pt-4 mt-5'>Cart items</div>
            {
                selectedProduct.length === 0 && (
                    <div className='d-flex flex-column justify-content-center  fs-1 fw-normal  cart-empty opacity-50' style={{height:'52vh'}}>cart is empty</div>
                )
            }
            <div className='d-flex justify-content-end pt-2'>
                {
                    selectedProduct.length >= 1 &&(
                        <button className='btn btn-warning text-white fw-semibold'>Clear all</button>
                    )
                }
            </div>
        {
            
            selectedProduct.map((d)=>{
                return(<>
                <div className="row justify-content-center pt-2 pb-3">
                    <div className="col-2"> <img src={d.image} height={60} alt="cartimage"/></div>
                    <div className="col-4">
                        <h6 className="ps-2 pt-3">{d.title}</h6>
                    </div>
                    <div className="col pt-3 fw-semibold">Q-</div>
                    <div className="col-2">
                        <button className="btn btn-danger mt-2">-</button>
                    </div>
                    <div className="col-2" >
                        <button className="btn btn-success mt-2">+</button>

                    </div>
                    <div className="col pt-3">${d.price}</div>
                    
                    
              
                </div>
                </>
                )
              
            })
        }
</div>
        </>
     );
}

export default Cart;