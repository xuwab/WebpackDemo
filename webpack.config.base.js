var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Test Webpack',
            filename: 'index.html',
            template: 'src/assets/index.html'
        }
    )],
    module: {

    },
};
