import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = (prop) => {
  const cart = prop.cart;
  const total = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);
  
  let shipping = 0;
  const formatNumber = (num) => {
    const pricision = num.toFixed(2);
    return Number(pricision);
  };
  if (total > 35) {
    shipping = 0;
  } else if (total > 0) {
    shipping = 4.99;
  }
  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h4> Order Summary </h4> <p> Items Ordered: {cart.length} </p>{" "}
      <p> Product price: {formatNumber(total)} </p>{" "}
      <p>
        {" "}
        <small> Shipping cost: {shipping} </small>
      </p>
      <p>
        {" "}
        <small> Tax + Vat: {tax} </small>
      </p>
      <p> Total price: {grandTotal} </p>
      {/* <Link to ="/review"> 
      <button  className="main-button">
        Review Order
      </button>
      </Link> */}
      {

        prop.children
      }

    </div>
  );
};

export default Cart;
