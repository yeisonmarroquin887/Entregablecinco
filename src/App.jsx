import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListPokedex from "./pages/Pokemones/ListPokedex";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokedex/:name" element={<ListPokedex/>} />
      </Routes>
    </div>
  );
};

export default App;