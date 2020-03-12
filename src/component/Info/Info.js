import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

const Info = (props) => {
    const {name,email,adress,info,salery,img,phone}=props.user;
    return (
        <div className="info">
            <div className="users-image">
                <img src={img} alt=""/>
            </div>
            <div className="users-info">
                <h3>Name: {name}</h3>
                <p><small>Email : {email}</small></p>
                <p>phone no: {phone}</p>
                <p><small>Adress: {adress}</small></p>
                <p><small>About: {info}</small></p>
                <p>Selary: {salery} Taka</p>
                <button className="add-btn"><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
            </div>
            
        </div>
    );
};

export default Info;