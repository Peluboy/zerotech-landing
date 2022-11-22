import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
    <div className={toggle ? 'navbarExpanded' : 'navbar'}>
      <div className='left'>
        <a href='/'>
          <h1>MyLogo</h1>
        </a>
      </div>
      <div className='right'>
        <div className='menu'>
          <div className='menuResponsive' onClick={handleToggle}>
          <Hamburger toggled={toggle} toggle={setToggle} size={20} />
            {/* {toggle ? <CloseIcon /> : <MenuIcon />} */}
          </div>
          <div className='navLink'>
            <Link to='/clients'>Clients</Link>
            <Link to='/checkwebsite'>Check Website</Link>
          </div>
        </div>
        <button className='btn-1'>Direct Call</button>
      </div>
    </div>
    </>
  )
}

