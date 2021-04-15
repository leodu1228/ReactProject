import React, {useState} from 'react';

function StateHook(){
    const [count, setCount] = useState(0); // useState是一個Hook
    return (
        <div>
            <p>U clicked {count} times</p>
            <button onclick={()=> setCount(count+1)}>
            Click me
            </button>
        </div>
    );
}


export default StateHook;