import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Listagem = () => {
    const [movimentacao, setMovimentacao] = useState([])

    useEffect(() =>{
        getMovimentacao()
    }, [])

    const getMovimentacao = async()=>{
        try {
            const response = await axios.get('http://localhost:8080/movimentacoes');
            setMovimentacao(response.data)
        } catch (error) {
            console.log(error);
        }
       
        }
        const deleteMovimentacao =async (id)=>{
            await axios.delete(`http://localhost:8080/movimentacoes/delete/${id}`)
            getMovimentacao()

    }
  return (
    <div className= "conteiner">
    <div className = "btn">
    <Link  className='btn btn-primary' to="/cadastrarMovimentacao">
<button>Cadastrar</button>
</Link>     
    </div>

  <table className='table-border'>
  <thead>
        <tr>
        <th scope="col">Tipo de Movimentação</th>
          <th scope="col"> Data Hora Inicio</th>
          <th scope="col">Data Hora Fim</th>
      
        </tr>
      </thead>
  <tbody>
        {movimentacao.map((clientes) => (
          <tr key={clientes.id}>
 <td>{clientes.tipoMovimentacao}</td>
 <td>{clientes.dataHoraInicio}</td>
<td>{clientes.dataHoraFim}</td>
  <Link type="button" class="btn btn-warning" to={`/EditarMovimentacao/${clientes.id}`}>
    Editar     
</Link>
<Link> 

<button type="button" class="btn btn-danger" onClick={()=> deleteMovimentacao(clientes.id)}>Delete</button>

</Link>

           
          </tr>
        ))}
      </tbody>
  </table>
</div>
  )
}

export default Listagem
