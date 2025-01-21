import "./App.css";
import AllPlayers from "./components/AllPlayers";
import { Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<PlayerDetails />} />
      </Routes>
    </>
  );
}

export default App;
