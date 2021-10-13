module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native/*|redux-persist/es/createTransform|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-paper|react-native-iphone-x-helper|@sentry/.*)"
  ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/jest.setup.js"
  ],
};
