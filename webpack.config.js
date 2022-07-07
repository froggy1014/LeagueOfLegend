const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    // new MiniCssExtractPlugin({ filename: 'scss/style.scss' }),
    new HtmlPlugin({template: './index.html'}),
    new CopyPlugin({ patterns: [ { from: 'static' }  ]    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};