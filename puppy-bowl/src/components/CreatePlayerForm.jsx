import { useState } from "react";
import { addPlayer } from "../api";

export default function CreatePlayerForm({getData}){
      const defaultPlayer = { name: "", breed: "", imageUrl: "", status:"bench", };
      const [player, setPlayer] = useState(defaultPlayer);
    
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
            setPlayer({ name: e.target.value, breed: player.breed })
          }
        />
        <input
          value={player.breed}
          type="text"
          name="breed"
          placeholder="Breed"
          onChange={(e) =>
            setPlayer({ name: player.name, breed: e.target.value })
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
            })
          }
        />
        <button>Submit</button>
      </form>
        </>);
}