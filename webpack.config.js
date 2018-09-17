const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.sass$/,
            use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader?sourceMap=true'],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
