import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  const links = [
    { id: 1, name: 'Books', path: '/' },
    { id: 2, name: 'Categories', path: '/categories' },
  ];

  return (
    <nav>
      <div className="logo">
        <span> Book Store CMS</span>
      </div>
      <div className="hamburger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
      <div className="profile-button">
        <FaUserAlt className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
