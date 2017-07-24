const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 4444
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
