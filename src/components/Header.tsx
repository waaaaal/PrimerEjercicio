import {NavLink} from 'react-router-dom'

export function Header() :JSX.Element{

  return (
    <header className="header">
      <div className="container-wrapper">
        <h1>
          <NavLink to="/">Lista de tareas</NavLink>
        </h1>
      </div>
    </header>
  );
}
