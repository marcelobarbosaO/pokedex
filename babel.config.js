module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': ['src/assets/*'],
          '@components': ['src/components/*'],
          '@services': ['src/services/*'],
          '@theme': ['src/theme/*'],
          '@theme': ['src/theme/*'],
          '@store': ['src/store/*'],
          '@scenes': ['src/scenes/*'],
          '@utils': ['src/utils/*'],
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
