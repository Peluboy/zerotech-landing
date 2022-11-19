import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='left'>
        <h1>MyLogo</h1>
      </div>
      <div className='right'>
        <div className='menu'>
          <span>Check Website</span>
          <span>Clients</span>
        </div>
        <button className='btn-1'>Direct Call</button>
      </div>
    </div>
    </>
  )
}

export default Navbar
