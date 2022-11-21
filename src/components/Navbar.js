import './navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='left'>
        <a href='/'>
          <h1>MyLogo</h1>
        </a>
      </div>
      <div className='right'>
        <div className='menu'>
            <Link to='/clients'>Clients</Link>
            <Link to='/checkwebsite'>Check Website</Link>
        </div>
        <button className='btn-1'>Direct Call</button>
      </div>
    </div>
    </>
  )
}

