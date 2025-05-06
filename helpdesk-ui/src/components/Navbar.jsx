import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand text-white">Help Desk</span>
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