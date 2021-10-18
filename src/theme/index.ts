// @ts-nocheck
import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Spartan-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Spartan-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Spartan-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Spartan-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Spartan-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Spartan-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Spartan-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Spartan-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Spartan-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Spartan-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Spartan-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Spartan-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2E6EB5',
    accent: '#D8D8D8',
    background: '#fff',
    surface: '#E5E5E5',
    text: '#000',
    disabled: '#ccc',
    placeholder: 'rgba(0,0,0,.54)',
    backdrop: '#5E5D5D',
    onSurface: '#ccc',
    notification: '#f00',
    lightGray: 'rgba(0, 0, 0, 0.08)',
  },
  backgroundType: {
    bug: '#8BD674',
    dark: '#6F6E78',
    dragon: '#7383B9',
    electric: '#F2CB55',
    fairy: '#EBA8C3',
    fighting: '#EB4971',
    fire: '#FFA756',
    flying: '#83A2E3',
    ghost: '#8571BE',
    grass: '#8BBE8A',
    ground: '#F78551',
    ice: '#91D8DF',
    normal: '#B5B9C4',
    poison: '#9F6E97',
    psychic: '#FF6568',
    rock: '#D4C294',
    steel: '#4C91B2',
    water: '#58ABF6',
  },
  fonts: configureFonts(fontConfig),
  sizes: {
    border: 6,
    margin: 10,
    marginIntern: 24,
    padding: 20,
  },
};

export default theme;
