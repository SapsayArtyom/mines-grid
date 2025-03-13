import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';
import * as dotenv from "dotenv";
dotenv.config({path: "./.env"});

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: paths.favicon,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'public/assets', to: './assets' }, // Копирование содержимого папки public в build
        //     ],
        // }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
            __IS_DEV__: JSON.stringify(isDev),
        })
    ];
}