module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "@babel/plugin-transform-flow-strip-types",
    [
      "@babel/plugin-proposal-private-methods", { "loose": true }],
    'react-native-reanimated/plugin',
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }]
  ]
};
