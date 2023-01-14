import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <a href="/home">Home</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventroy</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;