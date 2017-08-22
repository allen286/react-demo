const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const DevConfig = {
  // 开发环境不使用chunkhash, CommonConfig里的output will be overridden.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  devtool: "cheap-module-source-map",
  devServer: {
    port: 7777,
    host: 'localhost',
    // historyApiFallback: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = Merge(CommonConfig, DevConfig);
