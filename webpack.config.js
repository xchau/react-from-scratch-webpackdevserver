export const config = {
  entry: './src/index.js',

  output: {
    path: '/build',
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
