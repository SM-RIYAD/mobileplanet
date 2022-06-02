import React, { useEffect } from 'react';

import { useState } from 'react';
import fakeData from "../../fakeData/products.json";
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link, useNavigate } from "react-router-dom";
import happyimage from "../../images/giphy.gif"

const Review = () => {
    const [cart,setCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
            const navigate = useNavigate();  
            
                
    const handleProceedCheckout=()=>{
        navigate('/shipment');
      
    }
    const handleRemoveProduct = (productKey)=>{
    
          
      console.log('remove clicked',productKey);

        const newCart=cart.filter( pd=>pd.key!=productKey );
        setCart(newCart);
        deleteFromDb(productKey);
    }
    useEffect(()=>{
      const savedCart=getStoredCart();
      const productKeys=Object.keys(savedCart);
      const cartProducts=productKeys.map(key=>{
              

        const product=fakeData.find(pd=> pd.key===key);
        product.quantity=savedCart[key];
        return product;

      });
      console.log(cartProducts);
      setCart(cartProducts);
     


    },[])
    let thankyou;
    if(orderPlaced){

      thankyou=<img src={happyimage} alt=""/>
    }
    return (
         <  div className="twin-container" >
           <div className="product-container">
           <p > This is review </p> 
        <h1>Cart items:{cart.length}</h1>
        {
            cart.map(pd=><ReviewItem handleRemoveProduct={handleRemoveProduct} key={pd.key }product={pd} ></ReviewItem>)
        }
        {thankyou}
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                <button  onClick = {handleProceedCheckout} className="main-button">
       Proceed Checkout
      </button>
                </Cart>
           </div>
  
        </div>
    );
};

export default Review;