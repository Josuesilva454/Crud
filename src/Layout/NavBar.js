import React from 'react'
import './style.css';
const NavBar = () => {
  return (

    <header className='header'>
        <nav className='nav'>
        <ul class="menu"  >
            <li> <a href='/listagemconteiner'> Contêiner</a> </li>
            <li> <a href='/listagemmovimentacao'> Movimentação</a> </li>
            <li> <a href='/sumario'> Movimentação Total</a> </li>
          </ul>
        </nav>

    </header>
   )
}

export default NavBar;