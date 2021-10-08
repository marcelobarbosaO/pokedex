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
  }
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2E6EB5',
    accent: '##D8D8D8',
    background: '#CCC',
    surface: '#ccc',
    text: '#ccc',
    disabled: '#ccc',
    placeholder: '#ccc',
    backdrop: '#ccc',
    onSurface: '#ccc',
    notification: '#ccc'
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
