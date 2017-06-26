var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");
var stylelint = require('stylelint');

var publicFolderName = "dist";

module.exports = {
  entry: [
    'babel-polyfill',
    './app/js/index'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json']
  },
  output: {
    path: __dirname + '/' + publicFolderName,
    publicPath: '/',
    filename: 'application.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'app')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.(scss)$/,
        loaders: ['style',
                  'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                  'postcss'
                  ]
      },
      {
        test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
        include: /fonts/
      },
      {
        test: /\.ttf(\?[a-z0-9=&.]+)?$/,
        loader: "url?limit=55000&mimetype=application/octet-stream",
        include: /fonts/
      },
      {
        test: /\.eot(\?[a-z0-9=&.]+)?$/,
        loader: "url",
        include: /fonts/
      },
      {
        test: /\.svg(\?[a-z0-9=&.]+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
        include: /fonts/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[path][name].[ext]&context=./app/',
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&interlaced=false'
        ],
        include: /media/
      },
      {
        test: /\.json$/,
        loader: 'file?name=mocks/[name].[ext]',
        include: /mocks/
      },
      {
        test: /\.(html|ico)$/,
        loaders: [
          'file?name=[name].[ext]'
        ]
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({
      browsers: [
        'ie >= 11',
        'ff >= 40',
        'chrome >= 44',
        'safari >= 8',
        'opera >= 30',
        'ios >= 8',
        'android >= 4.4',
      ]
    }),
    precss
  ]
};
