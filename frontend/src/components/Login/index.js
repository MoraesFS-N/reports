import React, {useState} from 'react';
import './login.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function Login() {
    const [ user, setUser ] = useState('');
    const [ passwd, setPasswd ] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { user, passwd });
            const idUser = response.data.id;
        } catch (err) {
            alert('Deu B.O no login! Chama o Moraes');
        }
    }


    return(
        <div className="login">

            <Header />

            <div className="form">

                <form onSubmit={handleLogin}>
                    <label htmlFor="user">
                        Usuário
                        <input name="user"/>
                    </label>
                    
                    <label htmlFor="passwd">
                        Senha
                        <input type="password" name="passwd"/>
                    </label>
                    
                    <button type="submit"><Link to="/home">Login</Link></button>
                </form>
                
            </div>

            <Footer />

        </div>
    );
};