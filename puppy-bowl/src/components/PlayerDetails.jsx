import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlayerDetails } from "../api";

export default function PlayerDetails() {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getSinglePlayer(id) {
      setPlayerDetails(await getPlayerDetails(id));
    }
    getSinglePlayer(id);
  }, []);

  return (
    <>
      <img src={playerDetails.imageUrl} />
      <h1>{playerDetails.name}</h1>
      <h2>Breed: {playerDetails.breed}</h2>
      <h2>Status: {playerDetails.status}</h2>
      {playerDetails.team && (
        <div>
          <h2>Team: {playerDetails.team.name}</h2>
          {playerDetails.team.players.map((player) => {
            return <h3 key={player.id}>{player.name}</h3>;
          })}
        </div>
      )}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </>
  );
}
