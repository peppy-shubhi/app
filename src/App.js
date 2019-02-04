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
    let ninjas2=[...this.state.ninjas,ninja];
    this.setState({
      ninjas:ninjas2
    })
  }


  delete_en=(id)=>{
    let ninjas1=this.state.ninjas.filter(
      ninja=>{
        return ninja.id !== id
      }

    );
    this.setState(
      {
        ninjas:ninjas1
      }
    )

  }
  render() {
    return (
      <div className="App">
        <h1>WELCOME</h1>
        <Nin delete_en={this.delete_en} ninjas={this.state.ninjas}/>  
        <Add add={this.add}/>          
      </div>
    );
  }
}
export default App;