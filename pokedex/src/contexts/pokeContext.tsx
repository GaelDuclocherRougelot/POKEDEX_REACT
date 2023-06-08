import { PropsWithChildren, createContext, useState } from "react";

type Pokemon = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiTypes: {
    name: string;
    image: string;
  }[];
  apiGeneration: number;
  apiResistances: {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
  }[];
  resistanceModifyingAbilitiesForApi: {
    name: string;
    slug: string;
  };
  apiEvolutions: {
    name: string;
    pokedexId: number;
  }[];
  apiPreEvolution: string;
  apiResistancesWithAbilities: {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
  }[];
}

export type Pokemons = Array<Pokemon>;

type PokedexContextProps = {
  pokedex: Pokemons;
  filtered_pokemons: Pokemons;
  addToPokedex: (pokemons: Pokemons) => void;
  addFiltered_pokemons: (pokemons:Pokemons) => void;
};

export const PokedexContext = createContext<PokedexContextProps>({
  pokedex: [],
  filtered_pokemons: [],
  addToPokedex: () => void {},
  addFiltered_pokemons: () => void {}
});

export const PokedexProvider = ({ children }: PropsWithChildren) => {
  const [pokedex, setPokedex] = useState<Pokemons>([]);
  const [filtered_pokemons, setFiltered_pokemons] = useState<Pokemons>([]);

  const addToPokedex = (pokemons: Pokemons) => {
    setPokedex(pokemons);
  };

  const addFiltered_pokemons = (pokemons: Pokemons) => {
    setFiltered_pokemons(pokemons);
  };

  const pokedexContextValue: PokedexContextProps = {
    pokedex,
    addToPokedex,
    filtered_pokemons,
    addFiltered_pokemons
  };

  return (
    <PokedexContext.Provider value={pokedexContextValue}>
      {children}
    </PokedexContext.Provider>
  );
};
