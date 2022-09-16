import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, name: 'books', path: '/' },
    { id: 2, name: 'categories', path: '/categories' },
  ];
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={links[0].path}>Bookstore CMS</a>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active" exact>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
