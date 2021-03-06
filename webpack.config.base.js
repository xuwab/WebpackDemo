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
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ]
            }
        ]
    },
};
