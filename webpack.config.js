const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  devServer: {
    port: '4000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

