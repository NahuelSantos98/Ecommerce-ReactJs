import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'

const Home = () => {
  return (
    <div className='centrar'>
      <h1>Lo que quieras nosotros lo tenemos</h1>
      <Link to="/catalogo">
        <button className='catalogoBtn'>Ver Catálogo</button>
      </Link>
    </div>
  );
};

export default Home;
