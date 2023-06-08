import { useContext, useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import { PokedexContext } from "./contexts/pokeContext";
import Filters from "./components/Filters/Filters";

function App() {
  const { pokedex, addToPokedex } = useContext(PokedexContext);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => (pokedex.length === 0 ? addToPokedex(data) : null));
  }, [addToPokedex, pokedex]);

  return (
    <div className={`${styles.App}`}>
      <Header />
      <Filters />
      {pokedex.length > 0 ? <Pokemons /> : <div className={`${styles.loader}`}>
        <img src="/pokeball.png" alt="pokeball icon" />
        <h3>Loading...</h3>
      </div>
      }

    </div>
  );
}

export default App;
