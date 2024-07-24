import React from "react";
import { useLocation } from "react-router-dom";

const Userdetails = ()=>{
    const location = useLocation();
    const {user} = location.state ||{};

    if (!user) {
        return <h2>User not found</h2>;
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>Name:{user.name}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
            <p>Website:{user.website}</p>
        </div>
    );
}

export default Userdetails;