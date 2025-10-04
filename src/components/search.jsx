import React from "react";
import "./search.scss";

const Search = ({setSearch,search,handleSearch}) => {
  
  return (
    <form className="inp" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a Team or a League"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <img alt="search-glass" src="search.png" />
      </button>
    </form>
  );
};

export default Search;
