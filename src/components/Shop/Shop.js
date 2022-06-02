import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import "../../utilities/fakedb"
import { addToDb,getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);

  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    const savedCart=getStoredCart();
    const productKeys=Object.keys(savedCart);
    const previousCart=productKeys.map(existingKey=>{


      const product=fakeData.find(pd =>pd.key===existingKey);
      product.quantity=savedCart[existingKey];
      return product;

      console.log(existingKey,savedCart[existingKey]);
    })
    console.log(savedCart); 
 setCart(previousCart);

  },[])

  // console.log("hello riyad",products);
  const handleAddProduct = (product) => {
    // console.log("product added", product);
    // const newCart = [...cart, product];
    // setCart(newCart);
    // const sameProduct=newCart.filter(pd=>pd.key===product.key)
    // const count =sameProduct.length;
 
    // addToDb(product.key);


    const toBeAddedKey=product.key;
    const sameProduct=cart.find(pd=>pd.key===toBeAddedKey);
    let count=1;
    let newCart;
    if(sameProduct){

        const count=sameProduct.quantity+1;
        sameProduct.quantity=count;
        const others=cart.filter(pd=>pd.key!=toBeAddedKey);
          newCart=[...others,sameProduct];
    }
    else{

      product.quantity=1;
      newCart=[...cart,product];
    }
    setCart(newCart);
    addToDb(product.key);

  };
  return (
    <div className="twin-container">
      <div className="product-container">
        <h1> this is shop </h1>

        {products.map((pd) => (
          <Product product={pd} key={pd.key} ShowAddtocart={true} handleAddProduct={handleAddProduct}>
            {" "}
          </Product>
        ))}
      </div>{" "}
      <div className="cart-container">
        <h1> this is cart </h1> <Cart cart={cart}>
        <Link to ="/review"> 
      <button  className="main-button">
        Review Order
      </button>
      </Link>
           </Cart>{" "}
      </div>
    </div>
  );
};

export default Shop;
