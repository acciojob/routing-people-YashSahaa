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
            <p><bold>Name: </bold>{user.name}</p>
            <p><bold>Username: </bold>{user.username}</p>
            <p><bold>Email: </bold>{user.email}</p>
            <p><bold>Phone: </bold>{user.phone}</p>
            <p><bold>Website: </bold>{user.website}</p>
        </div>
    );
}

export default Userdetails;