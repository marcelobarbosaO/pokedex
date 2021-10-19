declare interface ListItems {
  count: number;
  next: string | null;
  previous: string | null;
}

declare type NameUrl = {
  name: string;
  url: string;
};

declare interface List extends ListItems {
  results: NameUrl[];
}

declare type Ability = {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
};

declare type GameIndex = {
  game_index: number;
  version: NameUrl;
};

declare type TypePokemon = {
  slot: number;
  type: NameUrl;
};

declare type StatPokemon = {
  base_stat: 45;
  effort: 0;
  stat: NameUrl;
};

declare type MoveVersion = {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
};

declare type MovePokemon = {
  move: NameUrl;
  version_group_details: any[];
};

declare type Sprite = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
    };
  };
  versions: any;
};

declare interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: any[];
  species: NameUrl;
  sprites: Sprite;
  stats: StatPokemon[];
  types: TypePokemon[];
  weight: number;
}

declare interface PokemonProps {
  id: number;
  name: string;
  image: string;
  backgroundColor: string;
  types: TypePokemon[];
}
