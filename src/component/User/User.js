import React, { useEffect, useState } from 'react';
import './User.css';
import Info from '../Info/Info';

const User = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://api.myjson.com/bins/9uo9m')
        .then(response => response.json())
        .then(data => setUsers(data));
    })
    return (
        <div className="users">
            <div className="user-info">
                {
                    users.map(user=><Info user={user}></Info>)
                }
                
            </div>

            <div>
                <h1>Info Summery</h1>
            </div>
        </div>
    );
};

export default User;