const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const ProdConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
       compress: {
          warnings: false
       }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // all loaders will receive these options
    // This plugin will be removed in the future as it only exists for migration from webpack 1 to 2.
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}

module.exports = Merge(CommonConfig, ProdConfig);
