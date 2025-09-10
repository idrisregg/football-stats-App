import React, { useState } from "react";
import Search from "./components/search";
import LeagueGrid from "./components/league-grid.jsx";
import Upbtn from "./components/go-up-btn.jsx";

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
  
  return (
    <main>
      <header>
        <img alt="header-logo" src="/logo.png" />
      </header>
        <Search search={search} setSearch={setSearch}  />
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
