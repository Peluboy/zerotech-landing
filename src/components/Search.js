import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ placeholder, data }) {
  const [setSearchUsername] = useState("");
  //  const [users, setUsers] = useState([])

  return (
    <div>
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => setSearchUsername(e.target.value)}
          />
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <button className="btn">Search</button>
        </div>
        <div className="dataResult"></div>
      </div>
    </div>
  );
}
