import React from 'react';
import './styles.css';

function Footer() {
  const date = new Date();
  return (
    <nav className="footer">
      <p className="text-center">
        Copyright © --- Book Store App &nbsp;
        {date.getFullYear()}
      </p>
    </nav>
  );
}
export default Footer;
