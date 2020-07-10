import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../header/index';

import './style.css';
import { Delete } from '@material-ui/icons';

export default function DeliveryClient() {

    const [nome, setNome] = useState('');    
    const [preco, setPreco] = useState('');
    const [formaPgt, setFormaPgt] = useState('');
    const [formaEtrg, setFormaEtrg] = useState('');

    const [clientes, setCliente] = useState([]);

    const history = useHistory();

    async function handleData(event){
        
        event.preventDefault();

        const data = {
            nome,
            preco,
            formaPgt,
            formaEtrg
        }
    
        try {
          await api.post('/clientes', data);
          history.push('/');

        } catch (error) {
            alert('Falha no cadastro tente novamente');
        }

       
    }
    
    useEffect( () => { api.get('/clientes').then(response => { setCliente(response.data)})});


    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

    return(
        <div className="cliente">

            <Header
                tittle="Tele-entrega Clientes"
                link="voltar"
                href="#"
            />
            
            <div className="inputs">
                <form onSubmit={handleData}>
                    <input className="date" type="text" name="date" disabled value={date} placeholder={date}/>
                    <input required placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input required placeholder="Valor" value={preco} onChange={e => setPreco(e.target.value)}   />
                    
                    <select name="formaPgto" id="formaPgto" value={formaPgt} onChange={e=> setFormaPgt(e.target.value)}>
                        <option value="Placeholder">Forma de Pagamento</option>
                        <option value="À vista">À vista</option>
                        <option value="A prazo">A prazo</option>
                        <option value="Cartão">Cartão</option>
                    </select>
                    
                    <select name="formaEntrega" id="formaEntrega" value={formaEtrg} onChange={e=> setFormaEtrg(e.target.value)}>
                        <option value="placeholder">Forma de Entrega</option>
                        <option value="Darlan8">Darlan - R$8,00</option>
                        <option value="Darlan10">Darlan - R$10,00</option>
                        <option value="Buscou">Cliente Buscou</option>
                    </select>
                    <button type="submit">Salvar</button>
                </form>
            </div>
            
            <div className="table">
                <table>
                        {clientes.map( cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.data}</td>
                                <td>{cliente.nome}</td>                        
                                <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cliente.valor)}</td>
                                <td>{cliente.formaPgt}</td>
                                <td>{cliente.formaEtrg}</td>
                                <td><Delete /></td>
                            </tr>
                        ))}
                </table>
            </div>
            
            <div className="footer">
                <div className="footerSum">
                    <ul>
                        {clientes.map( cliente => (
                            <li></li>
                        ))}
                        <li>Total
                            <div>R$8,00</div>
                        </li>
                    </ul>
                </div>
                <div className="footerSum">
                <button>Gerar relatório</button>        
                    <ul>
                        <li>À vista
                            <div className="value">R$8,00</div>
                        </li>
                        <li>Total
                            <div>R$8,00</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};