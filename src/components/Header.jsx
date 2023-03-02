import { NavLink } from 'react-router-dom'; 

function Header() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/"> Home </NavLink> 
      </ul>
    </nav>
  );
}

export default Header;