import React from "react";
import { useState,useEffect } from "react";
import './league-grid.scss';


const LeagueGrid = ({url,leagueImg,leagueName})=>{
  const [standing,setStanding] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const fetchData = async()=>{
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setStanding(data);
    }catch(error){
      console.error("Error fetching data:",error);
      <p>Error fetching data</p>
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
    },[url]);



    return (
            <div className="League-info">
              <h2>{leagueName}</h2>
              <img src={leagueImg} alt={leagueName}/>
              {isLoading ? (<p>◌</p>) : (<table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Club</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>pts</th>
                </tr>
                </thead>
                <tbody>
                    {standing.slice(0,7).map((team)=>(
                      <tr key={team.Club} >
                       <td>{team.Position}</td>
                        <td className="club">{team.Club}</td>
                        <td>{team.Played}</td>
                        <td>{team.Won}</td>
                        <td>{team.Drawn}</td>
                        <td>{team.Lost}</td>
                        <td>{team.GF}</td>
                        <td>{team.GA}</td>
                        <td>{team.GD}</td>
                        <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
              </table>)}
            </div>
      );
}

export default LeagueGrid;
