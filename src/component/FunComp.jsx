import React, { useState } from 'react'

function FunComp() {
    let [count,setCount] = useState(0);
    const Increment = () =>{
        setCount(count+1);
    }
    const Decrement = () =>{
        if(count==0){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
  return (
    <div>
        <h2>Function Component</h2>
        <h4>count: {count}</h4>
        <button onClick={Increment} className='increment'>+</button>
        <button onClick={Decrement} className='decrement'>-</button>

    </div>
  )
}

export default FunComp