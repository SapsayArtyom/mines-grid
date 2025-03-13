import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                    sourceMap: true,
                    url: true,
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true, // Включаем поддержку source maps для sass-loader
                    implementation: require('sass'), // Использует новую версию Dart Sass
                    api: 'modern', // Использует новый API для работы с плагинами
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true, // Включаем поддержку source maps для postcss-loader
                },
            },
        ],
    };

    const esBuildLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: "thread-loader",
                options: {
                    workers: 2,
                },
            },
            {
                loader: "esbuild-loader",
                options: {
                    loader: "tsx",
                    target: "es2015",
                },
            },
        ],
        exclude: /node_modules/,
    };
    // const typescriptLoader = {
    // 	test: /\.tsx?$/,
    // 	use: 'ts-loader',
    // 	exclude: /node_modules/,
    // };
    
    const fileLoader =  {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/',
                },
            },
        ],
    };
    
    const fileLoaderFonts = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    return [
        fileLoader,
        fileLoaderFonts,
        svgLoader,
        esBuildLoader,
        // typescriptLoader,
        cssLoader,
    ];
}