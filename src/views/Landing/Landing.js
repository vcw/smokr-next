import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>Smokr</h1>
      <h2>Трекер курений</h2>
      <Link to="/login">Вход</Link>
    </div>
  );
};

export default Landing;