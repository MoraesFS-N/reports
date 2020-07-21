import React from 'react';
import './home.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

import {ReactComponent as Entrega} from '../../assets/tele.svg';
import {ReactComponent as Bar} from '../../assets/drink.svg';

export default function Home() {
    return(
        <div className="home">
            <Header />
            <div className="content">
                
                <h2>Bem vindo, selecione um dos menus abaixo para acessar os recursos disponíveis.</h2>

                <div className="menu">
                    <Link to="/clients">
                        <span><Entrega /></span>
                        <b>TELE-ENTREGA</b>
                        <p>CLIENTES</p>
                    </Link>
                    <Link>
                        <span><Entrega /></span>
                        <b>TELE-ENTREGA</b>
                        <p>PONTOS</p>
                    </Link>
                    {/* <Link disabled>
                        <span><Bar /></span>
                        <b>VENDAS</b>
                        <p>BAR ESCOLA</p>
                    </Link>
                    <Link disabled>
                        <span><Bar /></span>
                        <b>VENDAS</b>
                        <p>BAR IFF</p>
                    </Link> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};