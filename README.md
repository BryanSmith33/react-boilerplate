# React Boilerplate

## package.json

```json
{
  "name": "react-boiler",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    // scripts which allow us to run our webpack configs
    // here we are running of production build version
    // we pass in a --config flag to let webpack know which file to use
    "build": "webpack --config webpack.config.prod.js",
    // here we are running our development webpack config
    // webpack-dev-server spins up a server that watches our project and will rebuild when we save changes
    // the --open flag will automatically open our project in the port specififed in webpack.config.dev
    "dev": "webpack-dev-server --config --open webpack.config.dev.js"
  },
  "license": "MIT",
  "repository": "https://github.com/BryanSmith33/react-boilerplate.git",
  "author": "Bryan Smith <bryan.gsmith33@gmail.com>",
  "devDependencies": {
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.4",
    "@babel/preset-env": "^7.4.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```