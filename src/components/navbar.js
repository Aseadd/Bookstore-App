import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  const links = [
    { id: 1, name: 'Books', path: '/' },
    { id: 2, name: 'Categories', path: '/categories' },
  ];
  return (
    <nav className="nav-bar">
      <ul className="nav-link">
        <li className="nav-item nav-title">
          <a href={links[0].path}>Bookstore CMS</a>
        </li>
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
      <div className="user">
        <FaUserAlt className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
