import React, { useState } from "react";
import Search from "./components/search";
import LeagueGrid from "./components/league-grid.jsx";
import Upbtn from "./components/go-up-btn.jsx";
import { useNavigate } from "react-router-dom";

 const leagues = [
  { name: "Premier League", img: "/Leagues-icons/epl.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/epl_real_standings.json" },
  { name: "La Liga", img: "/Leagues-icons/la_liga.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/laliga_real_standings.json" },
  { name: "Serie A", img: "/Leagues-icons/serie_a.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/serie_a_real_standings.json" },
  { name: "Bundesliga", img: "/Leagues-icons/bundesliga.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/bundesliga_real_standings.json" },
  { name: "Ligue 1", img: "/Leagues-icons/ligue_1.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/ligue_1_real_standings.json" },
  { name: "Portugal League", img: "/Leagues-icons/portugal_league.png", url: "https://raw.githubusercontent.com/idrisregg/Imitation-api/main/portugal_league_real_standings.json" },
];

const App = () => {

  const [search,setSearch]=useState('');

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
    <main>
      <header>
        <img alt="header-logo" src="/logo.png" />
      </header>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <div className="content">
        <span>Leagues</span>
      <div className="leagues">
        {leagues.map((league) => (
        <LeagueGrid leagueImg={league.img} leagueName={league.name} key={league.name} url={league.url} />
      ))}
      </div>
      <Upbtn/>
      </div>
    </main>
  )
}

export default App;
