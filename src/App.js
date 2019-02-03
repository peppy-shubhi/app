import React, { Component } from 'react';
import Nin from './Nin.js';
import Add from './Form.js';


class App extends Component {
  state={
    ninjas:[
      {name:'adm',age:22,id:1},
      {name: 'lalal',age:21,id:2},
      {name: 'shush',age:10,id:3}
    ]
  }
  add=(ninja)=>{
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja];
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>WELCOME</h1>
        <Nin ninjas={this.state.ninjas}/>  
        <Add add={this.add}/>          
      </div>
    );
  }
}

export default App;
