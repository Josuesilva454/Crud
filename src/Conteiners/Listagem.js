import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listagem = () => {
    const [conteiner, setConteiner] = useState([])

    useEffect(() =>{
        getConteiner()
    }, [])

    const getConteiner = async()=>{
        try {
            const response = await axios.get('http://localhost:8080/conteiners');
            setConteiner(response.data)
        } catch (error) {
            console.log(error);
        }
       
        }
        const deleteConteiner =async (id)=>{
            await axios.delete(`http://localhost:8080/conteiners/delete/${id}`)
            getConteiner()

    }

  return (
    <div className= "conteiner">
             <h2> Listagem de Contêiner</h2>
        <div className = "btn">
        <Link  className='btn btn-primary' style={{marginLeft: '500px'}} to="/cadastrarContainer">
  <button>Cadastrar</button>
</Link>     
        </div>
      
      <table className='table-border'>
      <thead>
            <tr>
            <th scope="col">Cliente</th>
              <th scope="col">NumeroContêiner</th>
              <th scope="col">Tipo</th>
              <th scope="col">Status</th>
              <th scope="col">Categoria</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
      <tbody>
            {conteiner.map((clientes) => (
              <tr key={clientes.id}>
     <td>{clientes.cliente}</td>
     <td>{clientes.numerodoConteiner}</td>
    <td>{clientes.tipo}</td>
    <td>{clientes.status}</td>
      <td>{clientes.categoria}</td>
      <Link class="btn btn-warning"   to={`/editar/${clientes.id}`} >
        Editar      
</Link>
<Link> 

   <button type="button" class="btn btn-danger" onClick={()=> deleteConteiner(clientes.id)}>Delete</button>

 </Link>
  
               
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default Listagem;


