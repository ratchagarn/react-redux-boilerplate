const webpack     = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');


module.exports = {

  entry: './src',

  devtool: 'source-map',

  output: {
    path: 'builds',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'builds/',
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 6969,
    historyApiFallback: true,
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
  },

  module: {
    loaders: [
      {
        test:   /\.js/,
        loader: 'babel',
        include: `${__dirname}/src`,
      },
      {
        test:   /\.scss/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },


  plugins: [
    new CleanPlugin('builds'),
  ],

}
