import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/mobileplanet.png";
import "./Header.css";
const Header = () => {
  const [loggedInUser,setLoggedInUser]= useContext(UserContext)
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
          
      <Link to="/shop">shop</Link>
                <Link to="/review">review</Link>
                <Link to="/manage">manage</Link>
                <button onClick={()=>setLoggedInUser({})} > Sign Out</button>
      </nav>{" "}
    </div>
  );
};

export default Header;
