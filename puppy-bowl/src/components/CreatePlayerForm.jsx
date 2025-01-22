import { useState, useEffect } from "react";
import { addPlayer, getTeams } from "../api";

export default function CreatePlayerForm({ getData }) {
  const defaultPlayer = {
    name: "",
    breed: "",
    imageUrl: "",
    status: "bench",
    teamId: "1797",
  };
  const [teams, setTeams] = useState([]);
  const [player, setPlayer] = useState(defaultPlayer);

  useEffect(() => {
    async function fetchTeams() {
      setTeams(await getTeams());
    }
    fetchTeams();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await addPlayer(player);
    setPlayer(defaultPlayer);
    getData();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={player.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) =>
            setPlayer({
              name: e.target.value,
              breed: player.breed,
              imageUrl: player.imageUrl,
              teamId: player.teamId,
            })
          }
        />
        <input
          value={player.breed}
          type="text"
          name="breed"
          placeholder="Breed"
          onChange={(e) =>
            setPlayer({
              name: player.name,
              imageUrl: player.imageUrl,
              breed: e.target.value,
              teamId: player.teamId,
            })
          }
        />
        <input
          value={player.imageUrl}
          type="text"
          name="imageUrl"
          placeholder="Image Url"
          onChange={(e) =>
            setPlayer({
              name: player.name,
              breed: player.breed,
              imageUrl: e.target.value,
              teamId: player.teamId,
            })
          }
        />
        <div>
          <select
            onChange={(e) => {
              setPlayer({
                name: player.name,
                breed: player.breed,
                imageUrl: player.imageUrl,
                teamId: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
