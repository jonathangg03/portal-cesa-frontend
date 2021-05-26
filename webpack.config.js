const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js||.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css||.scss$/,
        use: [
          "sass-loader",
          "css-loader",
          {
            loader: miniCssExtractPlugin.loader,
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
    compress: true,
  },
};
