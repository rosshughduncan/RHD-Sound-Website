// Used code from: https://www.digitalocean.com/community/tutorials/react-server-side-rendering
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: 'babel-loader'
            }
        ]
    }
};