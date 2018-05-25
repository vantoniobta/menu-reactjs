import React, { Component } from 'react';
import './App.css';

class HeaderHome extends Component {
  render() {
    let headerText = {color:'#5CA1E5', 'font-size':'40px'}
    return (
      <div>  
      <h1 style={headerText}>MediaKit 2018</h1>
      </div>
    );
  }
}

class Browser extends Component {
  render() {
    let style_div = {width:"40%", display:'inline-block'}
    return (
      <div style={style_div}>  
      <h3>USUARIOS UNICOS!</h3>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderHome/>
      <Browser/>
      <Browser/>
      <Browser/>
      <Browser/>
      </div>
    );
  }
}

export default App;
