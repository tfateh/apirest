import React from 'react'
import { Link } from 'react-router-dom'

const GuestNav = () => {
  return (
    <div>
        <Link to="/signin"><button>Sign in</button></Link>
        <Link to="/signup"><button>Sign out</button></Link>

    </div>
  )
}

export default GuestNav