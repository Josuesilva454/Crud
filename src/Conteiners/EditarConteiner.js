import React,{useEffect, useState} from 'react';
import { useParams  } from 'react-router';
import axios from 'axios';


const EditarConteiner = () => {
    const [conteiner, setConteiner] = useState([]);
    const [cliente, setCliente] = useState("");
    const [numerodoConteiner, setNumerodoConteiner] = useState("");
    const [tipo, setTipo] = useState("");
    const [status, setStatus] = useState("");
    const [categoria, setCategoria] = useState("");

    const {id} = useParams();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.put(`http://localhost:8080/conteiners/update/${id}`, {
            cliente,
            numerodoConteiner,
            tipo,
            status,
            categoria,
          }).then(response =>{
            console.log(response.data);
            alert("Contêiner foi alterado com sucesso!");
          });
        }catch(erro){
          console.log(erro);
          alert("Ocorreu o erro a o criar");
        }
     };
  return (
    <div>
    <form onSubmit={handleFormSubmit }>
    <div class="form-group">
      <label for="cliente">Cliente</label>
      <input type="cliente" class="form-control" id="Cliente" value={cliente} onChange={(event)=> setCliente(event.target.value)} placeholder="Cliente">
        </input>
    </div>
    <div class="form-group col-md-2">
      <label for="cliente">NumeroContêiner</label>
      <input type="cliente" class="form-control" id="Cliente"  value={numerodoConteiner} onChange={(event)=> setNumerodoConteiner(event.target.value)} placeholder="numero do contêiner">
        </input>
    </div>
    <div class="form-group">
    <label for="cliente">Tipo</label>
    <select class="form-control col-md-2"  value={tipo} onChange={(event)=> setTipo(event.target.value)}>
    <option value="">Selecione</option>
  <option value="20">20</option>
  <option value="40">40</option>
</select>

    </div>
    <div className='mb-3'>
        <label className="form-label">
          Status:
          </label>

          <select
            className="form-control"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Cheio">Cheio</option>
            <option value="Vazio">Vazio</option>
          </select>
          </div>
    <div class="form-check">
    <label for="cliente">Categoria</label>

    <select
            className="form-control"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="IMPORTACAO">Importação</option>
            <option value=" EXPORTACAO">Exportação</option>
          </select>

    </div>
    <button type="submit" class="btn btn-primary" onSubmit={handleFormSubmit }>Salvar</button>
  </form>
   </div>
  )
}

export default EditarConteiner;