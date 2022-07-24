import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './views/Inicio';
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='center'>
      <div className='vertical'>
        <Navbar />
      </div>
      <div className='vertical'>
        <Inicio />
      </div>
    </div>
  </React.StrictMode>
);