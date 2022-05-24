module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:react-native-dotenv', {
        "moduleName": "react-native-dotenv"
        // "envName": "APP_ENV",
        // "moduleName": "@env",
        // "path": ".env",
        // "blocklist": null,
        // "allowlist": [
        //   "API_URL",
        //   "API_TOKEN"
        // ],
        // "safe": false,
        // "allowUndefined": true,
        // "verbose": false
      }
    ],
  };
};
