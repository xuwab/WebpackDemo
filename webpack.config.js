const base = require('./webpack.config.base')


module.exports = {
    ...base,
    mode: 'development',
    module: {
        ...base.module,
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
