import { useContext } from "react";
import { PokedexContext } from "../../contexts/pokeContext";
import styles from './Pokemons.module.scss';

export default function Pokemons() {
  const { pokedex } = useContext(PokedexContext);

  return (
    <section className={`${styles.cards__section}`}>
      <ul className={`${styles.cards}`}>
      {pokedex.map((pokemon) => (
          <li key={pokemon.id} className={`${styles.card}`}>
            <div>
              <img src={pokemon.image} alt={`${pokemon.name} image`}/>
              {pokemon.name}
            </div>
          </li>
      ))}
      </ul>
    </section>
  );
}
