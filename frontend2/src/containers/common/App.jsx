import React, { Component } from 'react';
import '../../assets/css/App.css';
import MyNavbar from '../../components/MyNavbar.jsx';

class App extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div className="wrapper"> 
        <MyNavbar/>
        {/* <Login/>
        <Join/>
        <Mypage/> */}
      </div>
    );
  }
}

export default App;
