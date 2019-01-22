import React, { Component } from 'react';

class Nin extends Component{
    render()
    {
       // console.log(this.props)
       const {name,age}=this.props
        return(
            <div className="ninja">
            <p>Name:{name}</p>
            <div>Age:{age}</div>
            </div>
            
        )
    }
}
export default Nin;