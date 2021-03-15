import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/bem';
import './Navbar.css';

function Navbar({ navigation, current }) {
  const b = cn('navbar')

  return (
    <nav className={b()}>
      {navigation.map(({ icon, path }) => (
        <Link
          to={path}
          className={b('link', {active: path === current})}
          key={path}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;