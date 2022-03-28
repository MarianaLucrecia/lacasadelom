import './App.css';
import React from 'react';
import NavBar from"./components/NavBar.js";
import CartWidget from './components/CartWidget.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>     
    </div>
  );
}

export default App;