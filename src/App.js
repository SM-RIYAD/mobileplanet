import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";

import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProducrDetail/ProductDetail";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
     
    
      
              
      <Router>
      <Header> </Header>
        <Routes>
          <Route path="/shop" element={<Shop />} />{" "}
          <Route path="/review" element={<Review />} />{" "}
        
          <Route path="/login" element={<Login />} />{" "}
          <Route element={<PrivateRoute />}>
        <Route path="/shipment" element={<Shipment />} />
        </Route>
        <Route  element={<PrivateRoute />}>
        <Route path="/manage" element={<Inventory />} />{" "}
        </Route>
      
          
          <Route exact path="/shop" element={<Shop />} />{" "}
          <Route exact path="/product/:productKey" element={<ProductDetail/>} />{" "}
          <Route exact path="*" element={<Shop />} />{" "}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
