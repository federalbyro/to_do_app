// jest.config.js
module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|expo|firebase|@firebase|@expo/vector-icons))',
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '^firebase/auth$': '<rootDir>/__mocks__/firebase/auth.js',
      '^firebase/app$': '<rootDir>/__mocks__/firebase/app.js',
      '^firebase/firestore$': '<rootDir>/__mocks__/firebase/firestore.js',
      '^firebase/storage$': '<rootDir>/__mocks__/firebase/storage.js',
      '^expo-linear-gradient$': '<rootDir>/__mocks__/expo-linear-gradient.js', // Исправлено
      '^@react-native-async-storage/async-storage$': '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js', // Исправлено
    },
  };
  