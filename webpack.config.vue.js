const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: `./vue/index.tsx`,
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  module: {},
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: `vue.js`,
    path: path.resolve(__dirname, 'dist/vue')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: `index.html`,
      template: `vue/index.html`
    })
  ]
}
