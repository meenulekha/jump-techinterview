const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match TypeScript files
        use: "ts-loader", // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules directory
      },
      {
        test: /\.css$/, // Match CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // Use loaders to process CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Match image files
        use: [
          {
            loader: "file-loader", // Use file-loader to handle image files
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template file
      filename: "index.html", // Output HTML file name
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output CSS file name
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the development server
    historyApiFallback: true, // Enable support for HTML5 history API
  },
};
