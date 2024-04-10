const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src" },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin(),
        ],
    },
};