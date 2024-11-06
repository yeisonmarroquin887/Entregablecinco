import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListPokedex from "./pages/Pokemones/ListPokedex";
import PokemonId from "./pages/PokemonInfo/PokemonId";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokedex/:name" element={<ListPokedex/>} />
        <Route path="/pokemon/:id" element={<PokemonId/>} />
      </Routes>
    </div>
  );
};

export default App;