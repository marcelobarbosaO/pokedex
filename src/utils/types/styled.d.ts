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
    };
    sizes: {
      border: number;
      padding: number;
      margin: number;
    };
  }
}
