const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: `./react/index.tsx`,
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'react/tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: `react.js`,
    path: path.resolve(__dirname, 'dist/react')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: `index.html`,
      template: `react/index.html`
    })
  ]
}
