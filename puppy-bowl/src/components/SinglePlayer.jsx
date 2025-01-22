import { deletePlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer({ player, getData }) {
  const navigate = useNavigate();

  async function handleDelete() {
    await deletePlayer(player.id);
    getData();
  }

  function showDetails() {
    navigate(`/${player.id}`);
  }

  return (
    <>
      <div className="playerCard">
        <img src={player.imageUrl} />
        <h1>Name: {player.name}</h1>
        <button id="details" onClick={showDetails}>
          Details
        </button>
        <button id="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
