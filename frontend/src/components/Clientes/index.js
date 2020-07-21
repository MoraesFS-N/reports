import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import api from '../../services/api';
import './clientes.css';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import {ReactComponent as Remove} from '../../assets/remove.svg';
import {ReactComponent as Back} from '../../assets/back.svg';

export default function Client() {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [payment, setPayment] = useState('');
    const [delivery, setDelivery] = useState('');

    const history = useHistory();

    async function handleData(event){
        event.preventDefault();
        
        var date = new Date();
        date.toISOString().split('T')


        const data = {
            date,
            name,
            value,
            payment,
            delivery
        }
    
        try {
          await api.post('/client', data);
          history.push('/clients');

        } catch (error) {
            alert('Falha no cadastro tente novamente');
        }
    }

    async function handleDelete(id) {
        try {
            await api.delete(`client/${id}`,{});

            setClients(clients.filter(client => client.id !== id));
        } catch (error) {
            alert('Erro ao deletar, tente novamente');
        }
    }

    //Tentativa Paginação -- Darlan
    const [clients, setClients] = useState([]);
    const [total, setTotal] = useState(0);
    
    useEffect( () => { 
        api.get('/clients').then(response => { 
            setTotal(response.headers['x-total-count'])
            setClients(response.data)
        })
    });    

    return(
        <div className="cliente">

            <Header />

            <div className="content">

                <h2><b>TELE ENTREGA</b>CLIENTES</h2>

                <div className="link">

                    <Link to="/home"><Back /> Voltar</Link>

                    <div className="filter">
                        <p>FIltro por data: </p>
                        <input type="date"/>
                    </div>
                </div>

                <form onSubmit={handleData}>

                    <input value={date} 
                            onChange={e=> setDate(e.target.value)} 
                            disabled />
                    
                    <input placeholder="Nome" 
                           value={name} 
                           onChange={e=>setName(e.target.value)} />

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
                                <td onClick={() => handleDelete(client.id)}><Remove /></td>
                            </tr>
                        ))}
                </table>
                <div className="print">
                    <button>Imprimir relatório</button>
                </div>
            </div>

            <Footer />

        </div>
    );
    
};