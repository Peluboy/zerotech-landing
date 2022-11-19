import React from 'react'
import './SearchBar.css'
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';


function Search ({ placeholder, data }) {
//  const [users, setUsers] = useState([])
 const [ setSearchUsername] = useState("")

  return (
    <div>
       <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder={placeholder} onChange={(e) => setSearchUsername(e.target.value)}/>
                <div className='searchIcon'>
                    <SearchIcon />
                </div>
                <button className='btn'>Search</button>
            </div>
            <div className='dataResult'></div>
        </div>
    </div>
  )
}

export default Search
