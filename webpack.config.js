const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: `./src/index.tsx`,
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  module: {},
  resolve: {
    extensions: ['.tsx', '.js']
  },
  output: {
    filename: `index.js`,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `src/index.html`
    })
  ]
}
