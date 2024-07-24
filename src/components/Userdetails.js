import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Userdetails = ()=>{
    const location = useLocation();
    const {user} = location.state ||{};
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer); 
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Details</h1>
            {/* <p><b>Name: </b>{user.name}</p>
            <p><b>Username: </b>{user.username}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Phone: </b>{user.phone}</p>
            <p><b>Website: </b>{user.website}</p> */}
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
}

export default Userdetails;