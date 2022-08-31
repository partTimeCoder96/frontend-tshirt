module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          // cwd: "babelrc",
          extension: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            "assets/*": ["/src/assets/*"],
            "component/*": ["/src/component/*"],
            "navigation/*": ["/src/navigation/*"],
            "features/*": ["/src/features/*"],
            "styles/*": ["/src/styles/*"],
            "utils/*": ["/src/utils/*"],
            "type/*": ["/src/types/*"],
            "locale/*": ["/src/locale/*"],
          },
        },
      ],
      [
        "babel-plugin-inline-import",
        {
         "extensions":[".svg",".png",".jpeg",".jpg"] 
        }
      ],
      'react-native-reanimated/plugin'
    ],

  };
};
