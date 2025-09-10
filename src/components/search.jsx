import React from "react";
import "./search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const firstWord = search.trim().split(" ")[0].toLowerCase();

    const routes = {
      premier: "/epl",
      serie: "/seriea",
      bundesliga: "/bundesliga",
      portugal: "/portugal",
      ligue: "/ligue1",
      laliga: "/laliga",
    };

    if (routes[firstWord]) {
      navigate(routes[firstWord]);
    } else {
      alert("No match found!");
    }
  };

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
