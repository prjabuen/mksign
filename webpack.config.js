const path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    mksign: './src/index.js',
    'mksign.min': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'mksign',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
