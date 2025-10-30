import React, { Component } from "react";
class ClassComp extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    Decrement(){
       if(this.state.count==0){
         this.setState({
            count:0
        })
       }
       else{
         this.setState({
            count:this.state.count-1
        })
       }
    }
    render(){
        return(
            <div>
                <h2>class Component</h2>
                <h4>count: {this.state.count}</h4>
                <button onClick={()=>this.Increment()} className="increment" >+</button>
                <button onClick={()=>this.Decrement()} className="decrement">-</button>
            </div>
        )
    }
}
export default ClassComp