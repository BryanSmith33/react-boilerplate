// our base webpack file. This is where we will transform our js files and also compile our react code
// all of our shared webpack settings live here

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // using path to define where we want to output our code
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        // using babel-loader on all files that end in .js
        test: /\.js$/,
        loader: "babel-loader",
        // excluding the node_modules folder
        exclude: /node_modules/,
        options: {
          // @babel/preset-env is a "smart" preset that allows us to use the latest js
          // @babel/preset-react allows us to use React
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  // defining where our React code should mount. In this case it is looking for a div with an id of root. It is using the index.html as a template but will output to our dist folder
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
