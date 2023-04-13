import React, {useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const EditarMovimentacao = () => {
  const [tipoMovimentacao, setTipoMovimentacao] = useState('');
    const [dataHoraInicio, setdataHoraInicio] = useState('');
    const [dataHoraFim, setdataHoraFim] = useState('');

  const {id} = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/movimentacoes/update/${id}`, {
        tipoMovimentacao,
        dataHoraInicio,
        dataHoraFim,
    
    }).then(response => {
        console.log(response.data);
        alert('Movimentação criada com sucesso!');
      })
    
    } catch (error) {
        console.error( error);
        alert('Ocorreu um erro ao criar a movimentação.');


    }
  }
  return (
    <div>
      <h2>Editar Movimentações</h2>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className="form-label" htmlFor="tipoMovimentacao">Tipo de Movimentação:</label>
        <select
          type="text"
          id="tipoMovimentacao"
          className={'form-control'}
          value={tipoMovimentacao}
          onChange={event => setTipoMovimentacao(event.target.value)}>
            <option value="">Selecione</option>
            <option value=" EMBARQUE"> EMBARQUE</option>
            <option value=" DESCARGA">DESCARGA</option>
            <option value="GATE_IN">GATE_IN</option>
            <option value=" GATE_OUT">GATE_OUT</option>
            <option value="REPOSICIONAMENTO">REPOSICIONAMENTO</option>
            <option value="  PESAGEM"> PESAGEM</option>
          </select>
       
     
      </div>
      <div className='mb-3' >
        <label className="form-label" htmlFor="dataHoraInicio">Data e Hora do Início:</label>
        <input
          type="datetime-local"
          className={'form-control'}
          id="dataHoraInicio"
          value={dataHoraInicio}
          onChange={event => setdataHoraInicio(event.target.value)}
       />
      </div>
       <br/>
       <div className='mb-3' >
        <label className="form-label" htmlFor="dataInicio">Data e Hora do Início:</label>
        <input
          type="datetime-local"
          className={'form-control'}
          id="dataHoraFim"
          value={dataHoraFim}
          onChange={event => setdataHoraFim(event.target.value)}
       />
      </div>
       <br/>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={handleSubmit}
        >
          Adicionar
        </button>
    </form>
    </div>
  )
}

export default EditarMovimentacao
