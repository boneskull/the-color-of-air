import {join} from 'path';

export default {
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'the-color-of-air.js',
    libraryTarget: 'commonjs2',
    library: 'the-color-of-air'
  },
  devtool: 'source-map'
};
