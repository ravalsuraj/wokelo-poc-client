const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      Images: path.resolve(__dirname, './src/images'),
    },
  },
};