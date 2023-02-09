import React, { useState } from 'react'
import HomeButton from './HomeButton';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            
            <HomeButton />

            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter