import SinglePlayer from "./SinglePlayer";
import { useEffect, useState} from "react";
import { getPlayers } from "../api";
import CreatePlayerForm from "./CreatePlayerForm";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  
  async function getData() {
    const playersData = await getPlayers();
    setPlayers(playersData);
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Add a Player</h1>
      <CreatePlayerForm getData={getData}/>
      <h1>Players</h1>
      {players.map((player) => {
        return <SinglePlayer key={player.id} player={player} getData={getData} />;
      })}
    </div>
  );
}
