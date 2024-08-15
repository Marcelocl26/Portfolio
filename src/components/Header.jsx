import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Person, Work, Code, Mail } from '@mui/icons-material';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>Mi Portafolio</h1>
      <nav>
        <ul style={navListStyle}>
          <li>
            <NavLink 
              exact 
              to="/" 
              style={linkStyle} 
              activeClassName="active"
            >
              <Home style={iconStyle} /> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              style={linkStyle} 
              activeClassName="active"
            >
              <Person style={iconStyle} /> Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/experience" 
              style={linkStyle} 
              activeClassName="active"
            >
              <Work style={iconStyle} /> Experiencia
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              style={linkStyle} 
              activeClassName="active"
            >
              <Code style={iconStyle} /> Trabajos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              style={linkStyle} 
              activeClassName="active"
            >
              <Mail style={iconStyle} /> Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: 'transparent',
  color: '#ffffff',
  height: '60px',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 1000,
};

const logoStyle = {
  margin: 0,
  fontSize: '1.5rem',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  justifyContent: 'flex-end',
  flexGrow: 1,
  paddingRight: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  margin: '0 8px',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.3s ease',
};

const iconStyle = {
  marginRight: '5px',
};


export default Header;
