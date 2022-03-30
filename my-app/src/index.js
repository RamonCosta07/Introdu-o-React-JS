import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import reportWebVitals from './reportWebVitals';

function sum(a, b) {
  alert(a + b)
}

function PrimeiroJSX() {
  return (
    <div className="teste">
      <h1>Ramon Costa - React JS</h1>
      <p>
        <Button onClick={() => sum(10, 20)} name="Soma de 10 + 20" />
        </p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {PrimeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)