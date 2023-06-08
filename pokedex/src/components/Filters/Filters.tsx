import { useContext } from "react";
import styles from "./Filters.module.scss";
import { PokedexContext } from "../../contexts/pokeContext";

export default function Filters() {
  const { pokedex } = useContext(PokedexContext);

    const test = pokedex.filter((pokemon, params) => {

      return pokemon.apiTypes[0].name === 'Feu';

    });

    console.log(test);
    

  return (
    <section className={`${styles.filters__section}`}>
      <h2>Filters</h2>
    </section>
  );
}
