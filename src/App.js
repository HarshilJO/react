// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import { Component } from 'react';
import Welcome from './components/wlecome'
import Hello from './components/try'
import Message from './components/message'
import Counter from './components/counter'
import parentcomponent from './components/parentcomponent';
function App() {
  return (
    <div className="App">

      {/* <Welcome name="Harshil"/>
      <Welcome name="Joshi"/> */}
      {/* <Message name="Component"/> */}
      <parentcomponent/>
      {/* <Counter/> */}
    </div>
   


  );
}

export default App;
