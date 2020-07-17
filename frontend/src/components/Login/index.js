import React from 'react';
import './login.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Login() {
    return(
        <div className="login">

            <Header />

            <div className="form">

                <label htmlFor="user">
                    Usuário
                    <input name="user"/>
                </label>
                
                <label htmlFor="passwd">
                    Senha
                    <input type="password" name="passwd"/>
                </label>
                
                <button type="submit"><a href="/home">Login</a></button>
                
            </div>

            <Footer />

        </div>
    );
};