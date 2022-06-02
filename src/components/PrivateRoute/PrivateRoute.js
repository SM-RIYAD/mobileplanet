import React, { useContext } from 'react'
import { Outlet, Navigate,useLocation} from 'react-router-dom'
import { UserContext } from '../../App';



const PrivateRoute = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
  console.log("hlw",location);
    // let  userid = loggedInUser.email ? false : true;
    return (
        <>
        
            {/* {loggedInUser.email  ? <Outlet  /> : <Navigate to="/login" replace state={{from: location}} />}; */}
            {loggedInUser.email  ? <Outlet  /> : <Navigate to="/login" replace state={{from: location}} />};  
            
            
            
        </>

    );
}; 

export default PrivateRoute;