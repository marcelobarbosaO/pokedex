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
    accent: '##D8D8D8',
    background: '#fff',
    surface: '#ccc',
    text: '#000',
    disabled: '#ccc',
    placeholder: 'rgba(0,0,0,.54)',
    backdrop: '#ccc',
    onSurface: '#ccc',
    notification: '#f00',
  },
  fonts: configureFonts(fontConfig),
  sizes: {
    border: 6,
    margin: 10,
    padding: 20,
  },
};

export default theme;
