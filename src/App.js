import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComp from './component/ParentComp'
// import Lifecycle from './component/Lifecycle'
import Nand from './component/Nand'
import Exercise3 from './component/Exercise3'
import ComponentC from './component/ComponentC';
import {UserProvider} from './component/userContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserProvider value = "Nand">

        <ComponentC />
        </UserProvider>

        {/* <Exercise3/> */}
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
