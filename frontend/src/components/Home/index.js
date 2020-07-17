import React from 'react';
import './home.css';
import Header from '../Header';
import Footer from '../Footer';

import {ReactComponent as Entrega} from '../../assets/tele.svg';
import {ReactComponent as Bar} from '../../assets/drink.svg';

export default function Home() {
    return(
        <div className="home">
            <Header />
            <div className="content">
                
                <h2>Bem vindo, selecione um dos menus abaixo para acessar os recursos disponíveis.</h2>

                <div className="menu">
                    <a href="/clients">
                        <span><Entrega /></span>
                        <b>TELE-ENTREGA</b>
                        <p>CLIENTES</p>
                    </a>
                    <a>
                        <span><Entrega /></span>
                        <b>TELE-ENTREGA</b>
                        <p>PONTOS</p>
                    </a>
                    <a>
                        <span><Bar /></span>
                        <b>VENDAS</b>
                        <p>BAR ESCOLA</p>
                    </a>
                    <a>
                        <span><Bar /></span>
                        <b>VENDAS</b>
                        <p>BAR IFF</p>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};