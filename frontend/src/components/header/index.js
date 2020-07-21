import React from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="logo"/>
            </Link>
            <div className="backContainer"></div>
        </div>
    );
    
};