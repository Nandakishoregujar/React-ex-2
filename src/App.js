import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComp from './component/ParentComp'
// import Lifecycle from './component/Lifecycle'
import Nand from './component/Nand'
import Exercise3 from './component/Exercise3'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Exercise3/>
        {/* <Lifecycle /> */}
        {/* <ParentComp/> */}
        {/* <Nand /> */}
      
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React */}
        {/* </a> */}
      </header>
    </div>
  );
}

export default App;
