const miniCss = require("mini-css-extract-plugin");
const browserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: ["./src/js/main.js", "./src/scss/main.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].min.js",
    publicPath: "/",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: miniCss.loader,
            options: {
              publicPath: "../../", // Dodaj publicPath
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "../css/[name].min.css",
    }),
    new browserSyncPlugin({
      host: "localhost",
      port: 3000,
      files: ["*.html"], // => files to watch
      server: {
        baseDir: [__dirname],
      },
      // proxy: 'http://localhost:8000/', => your local url
    }),
  ],
};
