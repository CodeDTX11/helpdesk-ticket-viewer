import { NavLink } from 'react-router-dom';

import logo from '../assets/eupraxia-logo.png';


export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <img src={logo} alt="Icon" style={{ width: '15vw', height: 'auto' }}/>
      <div className="d-flex gap-3">
        <NavLink to="/"
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? 'active fw-bold text-primary ' : '')
          }
        >Dashboard</NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? 'active fw-bold text-primary' : '')
          }>
          Tickets</NavLink>
        <NavLink to="/about"
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? 'active fw-bold text-primary' : '')
          }>
          About</NavLink>
      </div>
    </nav>
  );
}