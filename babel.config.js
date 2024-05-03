module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "babel-plugin-root-import",
        { rootPathSuffix: "./src", rootPathPrefix: "@/" }
      ]
    ]
  };
  