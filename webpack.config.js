var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Test Webpack',
            filename: 'assets/index.html',
            template: 'src/assets/index.html'
        }
    )]
};
