import React, { Component } from 'react';
import '/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx/index.js.js';
import MyNavbar from '../components/MyNavbar.jsx/index.js.js';

class App extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
        <MyNavbar></MyNavbar>
        <Hello name='홍길동'></Hello>
      </div>
    );
  }
}

export default App;
