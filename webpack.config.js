const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const {CleanWebpackPlugin} = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserPlugin = require( "terser-webpack-plugin" );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

const isDev = process.env.NODE_ENV === 'development';
const filename = ext => isDev ? `[name].${ ext }` : `[name].[hash].${ ext }`

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    }

    return config;
}

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: path.resolve( __dirname, 'dist' )
            }
        },
        'css-loader',
    ];
    if (extra) {
        loaders.push( extra );
    }
    return loaders;
};

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-optional-chaining'
        ]
    }
    if (preset) {
        opts.presets.push( preset );
    }
    return opts;
}

const jsLoaders = () => {
    const loaders = [ {
        loader: 'babel-loader',
        options: babelOptions()
    } ]

    if (isDev) {
        loaders.push( 'eslint-loader' )
    }

    return loaders
}

module.exports = {
    context: path.resolve( __dirname, 'src' ),
    mode: 'development',
    entry: {
        main: [ '@babel/polyfill', './index.jsx' ],
    },
    output: {
        filename: filename( 'js' ),
        path: path.resolve( __dirname, 'dist' )
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 4200,
        hot: isDev
    },
    resolve: {
        extensions: [ '.jsx', '.js', '.json', '.png' ],
        alias: {
            '@modules': path.resolve( __dirname, 'src/modules' ),
            '@components': path.resolve( __dirname, 'src/components' ),
            '@redux': path.resolve( __dirname, 'src/redux' ),
            '@': path.resolve( __dirname, 'src' )
        }
    },
    plugins: [
        new HTMLWebpackPlugin( {
            template: "./index.html",
            minify: !isDev
        } ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin( {
            patterns: [
                {from: path.resolve( __dirname, 'src/favicon.ico' ), to: path.resolve( __dirname, 'dist' )},
            ]
        } ),
        new MiniCssExtractPlugin( {
            filename: filename( 'css' ),
        } )
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders( 'sass-loader' ),
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /.(ttf|woff|woff2|eot)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /.xml$/,
                use: [ 'xml-loader' ]
            },
            {
                test: /.csv$/,
                use: [ 'csv-loader' ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions( '@babel/preset-typescript' )
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions( '@babel/preset-react' )
                }
            }
        ]
    },
}