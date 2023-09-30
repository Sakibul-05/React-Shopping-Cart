
import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsFromAPI } from '../utilities/api';
import { fetchProducts, addToCart } from '../redux/actions/actions';
import "./HomePage.css"

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.products)
  const carts = useSelector((state) => console.log(state))
//   console.log(products)

  useEffect(() => {
    // Fetch products from the API and dispatch the action
    fetchProductsFromAPI().then((data) => dispatch(fetchProducts(data)));
  }, [dispatch]);

   return (
    <div className='HomePage'>
        <h1 className="text-center">All Items</h1>
        <div className='products-container'>
            {
                //Showing all Products
                products ?
                products.map(product=>(
                    <div className='item' key={product.id}>
                        <div className='img-box'>
                            <img src={product.images[0]} alt="item" />
                        </div>
                        <div className='desc-box'>
                            <p>Title: {product.title}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                        <div className='button-box'>
                            {/*  Add to Cart Button */}
                            <button type='submit' onClick={()=> dispatch(addToCart(product))} >Add To Cart</button>
                        </div>
                    </div>
                ))
                :null
                
            }

        </div>
    </div>
   )
}

export default HomePage;
