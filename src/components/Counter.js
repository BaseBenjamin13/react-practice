import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    )
}

export default Counter