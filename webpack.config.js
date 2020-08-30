const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "pages/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules|public/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "public"),
    filename: "component-name.js",
  },
  externals: {
    react: "react",
  },
};
