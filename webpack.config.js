const path = require('path')

const rootDir = __dirname
const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')

module.exports = {
  entry: path.resolve(srcDir, 'index.js'),
  output: {
    path: distDir,
    filename: 'proto.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        },
      },
    ],
  },
  devtool: '#inline-source-map',
};
