const path = require('path');

module.exports = {
  // other webpack configuration options
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  }
};
