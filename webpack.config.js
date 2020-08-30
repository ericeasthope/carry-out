const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "pages/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "build"),
    filename: "component-name.js",
  },
  externals: {
    react: "react",
  },
};
