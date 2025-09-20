const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');


module.exports = {
mode: 'development',
entry: path.resolve(__dirname, 'src/index.js'),
output: {
path: path.resolve(__dirname, 'dist'),
filename: '[name][contenthash].js',
assetModuleFilename: 'assets/[name][ext]',
clean: true
},
devServer: {
port: 9000,
compress: true,
hot: true,
static: {
directory: path.join(__dirname, 'dist'),
},
},
module: {
rules: [
{
test: /\.scss$/,
use: ['style-loader', 'css-loader', 'sass-loader'],
},
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset/resource'
  },
  {
    test: /\.svg$/,
    type: 'asset/resource',
    generator: {
        filename: path.join('icons', '[name].[contenthash][ext]'),
    }
  },
  
    {
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: 'asset/resource'
    },

  {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  }
],
},
plugins: [
new HtmlWebpackPlugin({
    title: 'My Web Page',
    filename: 'index.html',
    template: './src/index.html'
})
]
};

