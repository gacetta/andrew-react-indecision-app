const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      use: [{
        loader: 'babel-loader',
        options: {
          test: /\.js$/,
          exclude: /node_modules/
        }
      }]
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    }
  },
  mode: 'development'
};
