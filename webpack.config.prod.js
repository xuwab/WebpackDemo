const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base')
module.exports = {
    ...base,
    mode: 'production',
    plugins: [...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })],
    module: {
        ...base.module,
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};
