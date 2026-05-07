// create a counter application with following features:
// increment button 
// decrement button
// reset button 
// display count value on the screen 
import React, { useState } from 'react'
function App(){
    const [count,setCount]= useState(0);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <>
        <div>
            <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
            </div></>
    )
    
}
export default App;
