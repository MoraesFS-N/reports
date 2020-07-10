import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import Header from '../header/index';
import './style.css';
import { Delete } from '@material-ui/icons';

export default function DeliveryClient() {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [payment, setPayment] = useState('');
    const [delivery, setDelivery] = useState('');


    const history = useHistory();

    async function handleData(event){
    
        event.preventDefault();

        const data = {
            date,
            name,
            value,
            payment,
            delivery
        }

        try {
            await api.post('/clients', data);

            history.push('/client');

        } catch (err) {
            alert('Erro ao cadastrar');
        }
    }

    const [clients, setClients] = useState([]);

    useEffect( () => { 
        api.get('/client').then(response => { 
            setClients(response.data)
        })
    });

    
    return(
        <div className="cliente">

            <Header
                tittle="Tele-entrega Clientes"
                link="voltar"
                href="#"
            />
            
            <div className="inputs">
                <form onSubmit={handleData}>

                    <input  onChange={e=> setDate(e.target.value)} />
                    
                    <input placeholder="Nome" 
                           value={name} 
                           onChange={e=>setName(e.target.name)} />

                    <input placeholder="Valor" 
                           value={value}
                           onChange={e=>setValue(e.target.value)}  />
                    
                    <select value={payment}
                            onChange={e=>setPayment(e.target.value)} >

                        <option value="Placeholder">Forma de Pagamento</option>
                        <option value="À vista">À vista</option>
                        <option value="A prazo">A prazo</option>
                        <option value="Cartão">Cartão</option>

                    </select>
                    
                    <select value={delivery}
                            onChange={e=>setDelivery(e.target.value)} >

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
                        {clients.map( client => (
                            <tr key={client.id}>
                                <td>{client.date}</td>
                                <td>{client.name}</td>                        
                                <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(client.value)}</td>
                                <td>{client.payment}</td>
                                <td>{client.delivery}</td>
                                <td><Delete /></td>
                            </tr>
                        ))}
                </table>
            </div>
            
            <div className="footer">
                <div className="footerSum">
                    <ul>
                        {clients.map( client => (
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