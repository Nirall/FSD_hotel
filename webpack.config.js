const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const cssExtract = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new htmlPlugin({
            template: "src/index.pug",
            inject: false,
        }),
        new cssExtract({
            filename: "style.css"
        })
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
                test: /\.s*css/,
                use: [
                    cssExtract.loader,
                    "css-loader",
                    "sass-loader",  
                ]
            }            
        ]        
    }
}  
