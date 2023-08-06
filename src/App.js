import React from 'react';
import MyNavbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <ItemListContainer greeting="¡Bienvenido a la tienda!" />
    </div>
  );
}

export default App;
