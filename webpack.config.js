const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const cssExtract = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlPlugin({
            template: "src/template.pug",
            inject: false,
        }),
        new cssExtract({
            filename: "style.css",
        }),        
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.s*css$/,
                use: [
                    cssExtract.loader,
                    "css-loader",
                    "sass-loader",  
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "images"
                            }
                        },                
                ],                
            },            
            {
                test: /\.(ttf|woff|svg|otf|eot)$/i,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "fonts"
                            }
                        },                
                ],
            },            
        ],        
    },
}  
