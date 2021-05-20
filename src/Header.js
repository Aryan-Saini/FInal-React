import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const [filterInput, setFilterInput] = useState("")
  const history = useHistory();
  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
  }

  const onSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: 'search',
      search: `query=${filterInput}`
    });
  }

  return (
    <header className="header">
    <Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
    <div id="navigation" className="navigation">
      <nav>
        <ul>
          <li><Link to="/watchlist">Watch List</Link></li>
        </ul>
      </nav>
    </div>
    <form id="search" className="search" onSubmit={onSearch}>
      <input type="search" placeholder="Search for a title..." value={filterInput}
          onChange={updateFilterInput} />
      <div className="searchResults"></div>
    </form>
  </header>
  );
}