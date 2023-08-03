module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["jest-fetch-mock"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@expo/vector-icons)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@expo/vector-icons": "identity-obj-proxy",
  },
};
