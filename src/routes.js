import React from 'react'
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import NavBar from './Layout/NavBar';
import ListagemConteiner from './Conteiners/Listagem';
import EditarConteiner from './Conteiners/EditarConteiner';
import CadastrarConteiner from './Conteiners/CadastarConteiner';
import ListagemMovimentacao from './Movimentacao/Listagem';
import cadastrarMovimentacao from './Movimentacao/index';
import EditarMovimentacao from './Movimentacao/EditarMovimentacao';
import Sumoario from './TotalSumario/sumario';
const routes = () => {
  return (
    <div>    
    <Router>
         <NavBar/>
        <Routes>
        <Route path="/listagemconteiner" Component={ListagemConteiner} />
            <Route path="/cadastrarContainer" Component={CadastrarConteiner} />
             <Route path ="/editar/:id" Component={EditarConteiner}/>

             <Route path='/listagemmovimentacao' Component={ListagemMovimentacao}/>
             <Route path='/cadastrarMovimentacao' Component={cadastrarMovimentacao}/>
             <Route path='/EditarMovimentacao/:id' Component={ EditarMovimentacao }/>

             <Route path = '/sumario' Component={Sumoario}/>
             </Routes>
    </Router>
</div>
  )
}

export default routes;