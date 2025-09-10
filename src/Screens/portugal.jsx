import './screen-style.scss';
import { useEffect, useState } from "react";

const url = 'https://raw.githubusercontent.com/idrisregg/Imitation-api/main/portugal_league_real_standings.json';

export  default function Portugal() {
    const [standing,setStanding]=useState([]);
    const [isLoading,setIsLoading] = useState(false);
    

    const fetchData = async ()=>{
        setIsLoading(true);

    try {
     const response = await fetch(url);

     if(!response.ok){
      throw new Error('Failed to find data')
     }
     const data = await response.json();
    setStanding(data);
    } catch (error) {
        console.error(error);
        setStanding([])
    }finally{
      setIsLoading(false);
    }
    }

    useEffect(()=>{
        fetchData();
        document.title='Portugal League Standings';
    },[url])

  return (
    <div className="league-page">
      <h1>Portugal League Standings</h1>
      <img src='/Leagues-icons/portugal_league.png' alt='Portugal League' />
     {isLoading ? (<p>◌</p>) : (
      <table>
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
          {standing.map((team) => (
            <tr key={team.Club}>
              <td className="club">{team.Club}</td>
                <td>{team.Position}</td>
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
};

