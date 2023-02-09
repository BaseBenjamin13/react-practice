import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
        <Link to='/counter' >
            <button style={{margin: 50, fontSize: 25}}>Counter App</button>
        </Link>
    </div>
  )
}

export default HomePage