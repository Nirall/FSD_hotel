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
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
    },
    plugins: [
        new CleanWebpackPlugin,
        new htmlPlugin({
            template: "src/pages/home-page/home-page.pug",
            inject: false,
            filename: "index.html",
        }),
        new htmlPlugin({
            template: "src/pages/landing-page/landing-page.pug",
            inject: false,
            filename: "landing-page.html",
        }),
        new htmlPlugin({
            template: "src/pages/search-room/search-room.pug",
            inject: false,
            filename: "search-room.html",
        }),
        new htmlPlugin({
            template: "src/pages/room-details/room-details.pug",
            inject: false,
            filename: "room-details.html",
        }),
        new htmlPlugin({
            template: "src/pages/registration/registration.pug",
            inject: false,
            filename: "registration.html",
        }),
        new htmlPlugin({
            template: "src/pages/ui-form-elements/ui-form-elements.pug",
            inject: false,
            filename: "ui-form-elements.html",
        }),
        new htmlPlugin({
            template: "src/pages/ui-cards/ui-cards.pug",
            inject: false,
            filename: "ui-cards.html",
        }),
        new htmlPlugin({
            template: "src/pages/ui-colors/ui-colors.pug",
            inject: false,
            filename: "ui-colors.html",
        }),
        new htmlPlugin({
            template: "src/pages/ui-headers/ui-headers.pug",
            inject: false,
            filename: "ui-headers_and_footers.html",
        }),
        new cssExtract({
            filename: "style.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true,
                },
            },
            {
                test: /images.*\.(png|jpe?g|gif|svg)$/i,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[name].[ext]",
                            }
                        },
                ],
            },
            {
                test: /favicons.*\.(svg|png|ico|xml|json)$/i,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "assets/favicons/[name].[ext]",
                            }
                        },
                ],
            },
            {
                test: /\.s*css$/,
                use: [
                    cssExtract.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            prependData: `@import 'src/styles/variables.scss';`,
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
                test: /fonts.*\.(ttf|woff|svg|otf|eot)$/i,
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
