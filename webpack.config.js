var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackBuildLogger = require('webpack-build-logger');

var join = require('path').join;
var yargs = require('yargs');

var isOffline = yargs.argv.offline;
const isProd = yargs.argv.prod;

const environment = {
  isOffline,
  isDev: !isProd,
};

module.exports = {
  context: join(__dirname, '/src'),

  entry: {
    app: [
      'babel-polyfill',
      './main',
    ],
  },

  output: {
    path: join(__dirname, '/dist'),
    filename: '[name].js',
  },

  debug: true,
  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        join(__dirname, 'src'),
      ],
      exclude: /node_modules/,
      loader: 'babel?cacheDirectory',
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', [
        'css?sourceMap',
        'postcss',
        'less?sourceMap',
      ]),
    }, {
      test: /favicon\.ico$/i,
      loader: 'file',
    }],
  },
  resolve: {
    alias: {
      ui: 'components/todo-ui',
      'ui-component': 'components/ui-component',
    },
    extensions: ['', '.js'],
    modulesDirectories: [
      'node_modules',
      'src',
    ],
  },

  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 9001,
    quiet: true,
    noInfo: true,
  },

  plugins: [
    new WebpackBuildLogger({
      logEnabled: true,
    }),

    new webpack.OldWatchingPlugin(),
    new webpack.DefinePlugin({
      __OFFLINE__: isOffline,
      __DEV__: !isProd,
    }),
    new HtmlWebpackPlugin({
      title: (!isProd ? '(Dev)' : '') + ' TODO application',
      filename: 'index.html',
      template: 'index.ejs',
      environment,
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  },
    //  mangle: true
    // }),
  ],
};
