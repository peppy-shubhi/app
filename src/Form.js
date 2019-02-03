import React, {Component} from 'react'

class Add extends Component{
    state={
        name:null,
        age:null
    }
    handle_change=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handle_submit=(e)=>
    {
        e.preventDefault(); //for removing default refreshing of page when submitted//
        console.log(this.state);
    }

    render()
    {
    return(
        <form onSubmit={this.handle_submit}>
            Name: <br/>
            <input type="text" id="name" onChange={this.handle_change}/><br/>
            Age: <br/>
            <input type="text" id="age" onChange={this.handle_change}/>
            <br/>
            <button>
                SUBMIT
            </button>
        </form>
    );
    }
    

}
export default Add