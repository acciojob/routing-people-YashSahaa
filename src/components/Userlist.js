import React from "react";
import {Users } from "./Users";
import { Link } from "react-router-dom";

const Userlist= ()=>{
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {Users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`} state={{ user }}>{user.name}</Link>
                    </li>
                 ))}
            </ul>
        </div>
    );
}

export default Userlist;