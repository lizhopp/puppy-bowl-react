const BASE_URI = "https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT";

export async function getPlayers() {
  try {
    console.log("getPlayers");
    const response = await fetch(BASE_URI + "/players");
    const json = await response.json();
    const result = json.data;
    console.log(result.players);
    return result.players;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlayerDetails(id) {
  try {
    console.log("getPlayerDetails");
    const response = await fetch(BASE_URI + `/players/${id}`);
    const json = await response.json();
    const result = json.data;
    console.log(result.player);
    return result.player;
  } catch (error) {
    console.log(error);
  }
}

export async function addPlayer(player) {
  console.log("addPlayer");
  console.table(player);
  const response = await fetch(BASE_URI + "/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  const json = await response.json();
  const result = json.data;
  console.log(result);
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(BASE_URI + `/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
