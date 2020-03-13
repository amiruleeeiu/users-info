import React from 'react';
import './Summary.css'
const Summary = (props) => {
    const users=props.usersAll;
    const total=users.reduce((total,user)=>total+user.salery,0);
    return (
        <div className="summary">
            <h1>Users Summary</h1>
            <p>Total Users: {users.length}</p>
            <p>Total Users Salery: {total}</p>
        </div>
    );
};

export default Summary;