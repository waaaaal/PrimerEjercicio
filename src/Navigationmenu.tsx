import React from 'react';
import {NavLink} from 'react-router-dom'
function NavigationMenu() :JSX.Element {
  return (
    
    <nav>
    <ul className="nav-menu">
      <li className="nav-item">
        <NavLink className="nav-link" to='/'>Inicio</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" to="a">Segunda pagina</NavLink></li>
     
    </ul>
  </nav>
  );
}

export default NavigationMenu;
