import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <div>
        <Link to='/' >
            <button style={{margin: 50, fontSize: 25, backgroundColor: "green"}}>
                Home
            </button>
        </Link>
    </div>
  )
}

export default HomeButton