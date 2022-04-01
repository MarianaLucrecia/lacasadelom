import './App.css';
import React from 'react';
import NavBar from"./components/NavBar.js";
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la casa del OM"></ItemListContainer>     
    </div>
  );
}

export default App;