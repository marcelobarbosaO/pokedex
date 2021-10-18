import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      background: string;
      surface: string;
      text: string;
      disabled: string;
      placeholder: string;
      backdrop: string;
      onSurface: string;
      notification: string;
      lightGray: string;
    };
    backgroundType: {
      bug: string;
      dark: string;
      dragon: string;
      electric: string;
      fairy: string;
      fighting: string;
      fire: string;
      flying: string;
      ghost: string;
      grass: string;
      ground: string;
      ice: string;
      normal: string;
      poison: string;
      psychic: string;
      rock: string;
      steel: string;
      water: string;
    };
    sizes: {
      border: number;
      padding: number;
      margin: number;
      marginIntern: number;
    };
  }
}
