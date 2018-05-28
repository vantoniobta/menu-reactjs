import React, { Component } from 'react';
import './App.css';

let defaultTextColor = "#4E5E2E";

let mediakitServer   = {
  data : {
    name : 'Mediakit 2018',
    lists : [
       {
        name  :'BROWSER',
        all :[
              {name:'USUARIOS UNICOS', duration:13042},
              {name:'PÁGINAS VISTAS',duration:435894},
              {name:'VISITAS',duration:65756},
              {name:'TIEMPO PROMEDIO',duration:4334}
         ]
       },
       {
        name  :'APP MULTIMEDIOS',
        all :[
              {name:'USUARIOS UNICOS', duration:13042},
              {name:'PÁGINAS VISTAS',duration:435894},
              {name:'VISITAS',duration:65756},
              {name:'TIEMPO PROMEDIO',duration:4334}
        ]
       },
       {
        name  :'ALCANCE MULTIMEDIOS',
        all :[
              {name:'VIDEO (VOD)', duration:135642},
              {name:'TELEVISIÓN DIGITAL',duration:435094},
              {name:'CONTENIDO DE VISITAS',duration:6556023}
        ]
       },
       {
        name  :'GENERO',
        all :[
              {name:'HOMBRE', duration:111342},
              {name:'MUJER',duration:984354}
        ]
       }
    ]
  }
};

class App extends Component {
  constructor(){
    super();
    this.state = {serverData:{}}
  }
  componentDidMount(){
    setTimeout(() =>{
          this.setState({serverData:mediakitServer});
        }, 1000);
  }
  render() {  
    return (
      <div className="App">
        {this.state.serverData.data ?
          <div>
            <h1 style={{ color:defaultTextColor ,'fontSize': '54px'}}>
               {this.state.serverData.data.name}
               </h1>
            {this.state.serverData.data.lists.map(serverlist =>
               <Serverlist serverlist={serverlist}/>
              )}
          </div> : <h1>Loading....</h1>
        }
      </div>
    );
  }
}



class Serverlist extends Component{
   render(){
    let serverlist = this.props.serverlist
    return (
      <div style={{color:defaultTextColor,display:'inline-block' , width:"20%"}}>
      <h3>{serverlist.name}</h3>
        <ul>
        {serverlist.all.map(list =>
          <li>{list.name}</li>
        )}
        </ul>
      </div>
    );
   }
}

export default App;
