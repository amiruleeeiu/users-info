import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/user">Users</a>
                <a href="/summary">Review Summary</a>
                <a href="/Other">Others</a>
            </nav>
        </div>
    );
};

export default Header;