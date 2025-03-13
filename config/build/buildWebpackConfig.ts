import webpack from "webpack";
import path from 'path';
import { EsbuildPlugin } from "esbuild-loader";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        optimization: {
            minimize: !isDev,
            minimizer: [
                new EsbuildPlugin({ target: "es2015" }),
            ],
        },
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}