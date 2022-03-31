import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Contador from './Contador.jsx';
import Links from './Links.jsx';
import Pagina from './Pagina.jsx';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Pagina />
        </p>
        <p>
          <Contador />
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <Links />
        </p>
      </header>
    </div>
  )
}