import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="screen">
          </div>
          <div className="button">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className="button">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div className="button">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
          </div>
          <div className="button">
            <button>C</button>
            <button>0</button>
            <button>.</button>
            <button>/</button>
          </div>
          <div className="button">
            <button>=</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
