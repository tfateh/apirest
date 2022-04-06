import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authActions'

const NavBar = () => {

  const dispatch = useDispatch()
  return (
    <div>
        <button onclick={()=>dispatch(logout())}>Logout</button>
        <h1>Profile</h1>
        <Link to="/profile" />
        <h2>all Products</h2>
        <Link to="productslist"/>
    </div>
  )
}

export default NavBar