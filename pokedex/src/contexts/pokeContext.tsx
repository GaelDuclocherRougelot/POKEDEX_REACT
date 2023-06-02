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

type Pokemons = Array<Pokemon>;

type PokedexContextProps = {
  pokedex: Pokemons;
  addToPokedex: (pokemons: Pokemons) => void;
};

export const PokedexContext = createContext<PokedexContextProps>({
  pokedex: [],
  addToPokedex: () => void {}
});

export const PokedexProvider = ({ children }: PropsWithChildren) => {
  const [pokedex, setPokedex] = useState<Pokemons>([]);

  const addToPokedex = (pokemons: Pokemons) => {
    setPokedex(pokemons);
  };

  const pokedexContextValue: PokedexContextProps = {
    pokedex,
    addToPokedex
  };

  return (
    <PokedexContext.Provider value={pokedexContextValue}>
      {children}
    </PokedexContext.Provider>
  );
};
