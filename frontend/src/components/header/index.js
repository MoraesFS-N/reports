import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header(props) {

    return(
        <div className="header">
            <h1>{props.tittle}</h1>
            <Link href={props.href}>{props.link}</Link>
        </div>
    );
    
};