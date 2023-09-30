import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkout, removeFromCart } from '../redux/actions/actions'
import { useNavigate } from 'react-router-dom';
import "./CartPage.css";

const CartPage = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const cartItems=useSelector(state=> state.carts.cartItems)
    console.log(cartItems)

    const [totalPrice, setTotalPrice] = useState();
    useEffect(()=>{
        setTotalPrice(calculatePrice(cartItems))
    },[cartItems])
 
function calculatePrice(products){
    let sum=0;
    for (let product of products ){
        sum += product.price;
    }
    return sum;
}


function checkoutHandler(){
    alert("Items have been checked out")
    dispatch(checkout())
}

  return (
    <div className='CartPage'>
      <h1>All Items</h1>
      {
        cartItems.length>0?
      (<div className="cart-items-container">
        <div className="cart-items">
            {
                 
                cartItems.map(product=>(
                    <div className='item' key={product?.id}>
                    <div className='img-box'>
                        <img src={product?.images[0]} alt="item" />
                    </div>
                    <div className='desc-box'>
                        <p>Title: {product?.title}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                    <div className='button-box'>
                        {/*  Add to Cart Button */}
                        <button type='submit' onClick={()=> dispatch(removeFromCart(product.id))} >Remove from Cart</button>
                    </div>
                </div>
                ))
                
            }
        </div>
        <div className="sidebar">
            <div className="heading">
                <p>Ckeckout Lists</p>
            </div>
            <div className="checkout-items">
                {
                    cartItems.map(product =>(
                        <div className='checkout-item' key={product.id}>
                            <div>{product.title}</div>
                            <div>${product.price}</div>
                        </div>
                    ))
                }
                <div className='totalPrice-box'>
                    <div>Total</div>
                    <div>${totalPrice}</div>
                </div>
            </div>
            <div className="checkout-button">
                <button onClick={checkoutHandler}>Click To Checkout</button>
            </div>
        </div>
      </div>
      )
      : (<div className='emptyBox-container'>
        <p>Your cart is empty!</p>
        <button onClick={()=>navigate("/")}>Shop now</button>
      </div>)

      }
    </div>
  )
}

export default CartPage
