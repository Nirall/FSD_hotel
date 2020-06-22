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
            template: "src/landing-page.pug",
            inject: false,
            filename: "index.html",
        }),
        new htmlPlugin({
            template: "src/search-room.pug",
            inject: false,
            filename: "search-room.html",
        }),
        new htmlPlugin({
            template: "src/room-details.pug",
            inject: false,
            filename: "room-details.html",
        }),
        new htmlPlugin({
            template: "src/registration.pug",
            inject: false,
            filename: "registration.html",
        }),
        new htmlPlugin({
            template: "src/ui-form-elements.pug",
            inject: false,
            filename: "ui-form-elements.html",
        }),
        new htmlPlugin({
            template: "src/ui-cards.pug",
            inject: false,
            filename: "ui-cards.html",
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: (url, resoursepath, context) => {                                                                                               
                                    if(resoursepath.includes("images\\cards")) {                                        
                                        return `images/cards/${url}`;
                                    } else if (resoursepath.includes("images\\users")){
                                        return `images/users/${url}`;
                                    } else {                                        
                                        return `images/${url}`;
                                    }     
                                    
                                }   
                            }
                        },                
                ],                
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
