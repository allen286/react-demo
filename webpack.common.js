const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// DeprecationWarning: loaderUtils.parseQuery()
process.noDeprecation = true

module.exports = {
  entry: {
    app: ['./src/app.jsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx|js$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      use: {
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    }, {
      test: /\.(css|sass|scss)$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      use: {
        loader: 'file-loader',
        options: {
          limit: 50000,
          name: 'static/[name].[hash:8].[ext]'
        }
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    }]
  },
  resolve: {
    alias: {
      'Utils': path.resolve(__dirname, 'src/utilities/')
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'runtime']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/static/favicon.ico',
      inject: true,
      chunks: ['app', 'vendor', 'runtime'],
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css',
      allChunks: true
    })
  ]
}
