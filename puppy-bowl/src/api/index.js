const BASE_URI = "https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT";

export async function getPlayers() {
  try {
    const response = await fetch(BASE_URI + "/players");
    const json = await response.json();
    const result = json.data;
    return result.players;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await fetch(BASE_URI + `/players/${id}`);
    const json = await response.json();
    const result = json.data;
    return result.player;
  } catch (error) {
    console.log(error);
  }
}

export async function addPlayer(player) {
  try{
    const response = await fetch(BASE_URI + "/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });
      console.log(response)
  }catch(error){
   console.log(error)
  }
    
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

export async function getTeams() {
    try {
      const response = await fetch(BASE_URI + "/teams");
      const json = await response.json();
      const result = json.data;
      return result.teams;
    } catch (error) {
      console.log(error);
    }
  }
