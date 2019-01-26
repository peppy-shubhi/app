import React, { Component } from 'react';
import Nin from './Nin.js';


class App extends Component {
  state={
    ninjas:[
      {name:'adm',age:333,id:1},
      {name: 'lalal',age:999,id:2}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>WELCOME</h1>
        <Nin ninjas={this.state.ninjas}/>            
      </div>
    );
  }
}

export default App;
