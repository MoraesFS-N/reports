import React from 'react';
import './style.css';

export default function Wellcome() {
    return(
        <div id="home">
             <h2>REPORTS</h2>
             <input type="text" placeholder="Usuário"/>
             <input type="password" placeholder="Senha"/>
             <button type="submit">Entrar</button>
        </div>
    );
};