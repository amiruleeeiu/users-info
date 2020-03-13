import React, { useEffect, useState } from 'react';
import './User.css';
import Info from '../Info/Info';
import Summary from '../Summary/Summary';

const User = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://api.myjson.com/bins/9tdyy')
        .then(response => response.json())
        .then(data => setUsers(data));
    })
    
    const [usersAll,setUsersNumber]=useState([]);

    const handleAddedUser=(user)=>{
        const newUser=[...usersAll,user];
        setUsersNumber(newUser);
        
    }

    return (
        <div className="users">
            <div className="user-info">
                {
                    users.map(user=><Info handleAddedUser={handleAddedUser} user={user}></Info>)
                }
                
            </div>

            <div>
                
                <Summary usersAll={usersAll}></Summary>
            </div>
        </div>
    );
};

export default User;