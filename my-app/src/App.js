import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Header name="JC" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
  );
}

export default App;
