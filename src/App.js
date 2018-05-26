import React, { Component } from 'react';
import './App.css';

let dataMetrics = {
  data : {
    name : 'Browser',
      numbers : [
         {
          name  :'Usuarios Unicos',
          Xnum   : '2,666,526'
         },
         {
          name  :'Paginas vistas',
          Xnum   :'12,848,086'
         },
         {
          name  :'Visitas',
          Xnum   :'7854,427'
         },
         {
          name  :'Tiempo Promedio',
          Xnum   :'00:02:01min'
         }
      ]
  }
};

class HeaderHome extends Component {
  render() {
    let headerText = {color:'#5CA1E5', 'fontSize':'40px'}
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
      <h3>Usuarios Unicos!</h3>
      <ul><li>1233</li></ul>
      </div>
    );
  }
}

class App extends Component {
   constructor(){
    super();
    this.state = {serverData:{}}
  }
  componentDidMount(){
    setTimeout(() =>{
          this.setState({serverData:dataMetrics});
        }, 1000);
  }
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
