const path = require('path'); // Resolves absolute path names
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'), // Identify dist folder via absolute path
    publicPath: '/',
    filename: '[name].js', // File naming with hash for cache busting
    chunkFilename: '[name].[hash].js' // Chunked files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s?css$/, // CSS and SCSS files
        use: [
          {
            loader: 'style-loader' // Injects CSS as <style> tags
          },
          {
            loader: 'css-loader', // Resolves S/CSS imports
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // Processes SCSS into CSS
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'], // import without .js, .jsx, .json extensions
    alias: {
      // Alias paths so that e.g. "../../components/File" becomes "Components/File"
      Actions: path.resolve(__dirname, 'src/js/actions'),
      Components: path.resolve(__dirname, 'src/js/components'),
      Constants: path.resolve(__dirname, 'src/js/constants'),
      Containers: path.resolve(__dirname, 'src/js/components/containers'),
      Images: path.resolve(__dirname, 'src/images'),
      Reducers: path.resolve(__dirname, 'src/js/reducers'),
      Store: path.resolve(__dirname, 'src/js/store'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Views: path.resolve(__dirname, 'src/js/views'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
