import React from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';

export default function Header() {

    return(
        <div className="header">
            <a href="/">
                <img src={Logo} alt="logo"/>
            </a>
            <div className="backContainer"></div>
        </div>
    );
    
};