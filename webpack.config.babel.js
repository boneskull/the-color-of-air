import {join} from 'path';
import Babili from 'babili-webpack-plugin';
import webpackMerge from 'webpack-merge';

const baseConfig = {
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'the-color-of-air'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        include: join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
};

export default [
  webpackMerge(baseConfig, {
    output: {
      filename: 'the-color-of-air.js'
    }
  }),
  webpackMerge(baseConfig, {
    output: {
      filename: 'the-color-of-air.min.js'
    },
    plugins: [
      new Babili()
    ]
  })
];
