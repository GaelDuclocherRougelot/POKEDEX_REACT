import { useContext, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import { PokedexContext } from "./contexts/pokeContext";

function App() {
  const { pokedex, addToPokedex } = useContext(PokedexContext);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => (pokedex.length === 0 ? addToPokedex(data) : null));
    console.log(pokedex);
  }, [addToPokedex, pokedex]);

  return (
    <div className="App">
      <Header />
      <Pokemons />
    </div>
  );
}

export default App;
