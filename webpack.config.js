const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';


//настройки
const work_folder_name = "src";
const output_folder_name = "dist";

const PATHS = {
    src: path.resolve(__dirname, work_folder_name),
    dist: path.resolve(__dirname, output_folder_name),
};

module.exports = {
    entry: {
        //Чтобы соблюдать порядок вставки стилей лучше импортировать внутри js
        //но в теории можно добавить вторую точку входа
        //path.join(PATHS.src, 'scss', 'styles.scss')
        app: [path.join(PATHS.src, 'js', 'app.js')],
    },
    context: PATHS.src, //Входная папка
    output: {
        filename: `js/[name].[contenthash].js`,
        path: PATHS.dist,   //Выходная папка
    },

    devtool: isDev ? 'source-map' : '',
    stats: {
        children: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        //Ищет файлы в папке контекста (src)
        //копирует в выходную директорию
        new CopyPlugin([
                {from: 'database_connection.php', to: ''},
                {from: 'server_add_score.php', to: ''},
                {from: 'server_get_rating.php', to: ''},
            ],
            {
                copyUnmodified: true
            }
        ),
        new HtmlWebpackPlugin({
            inject: false,  //Сам не вставляет, только по шаблону
            title: 'DooM Slayer',
            filename: 'index.php', //Вывод в выходную папку
            template: 'index.php', //Относительно входной папки(src)
            chunks: ['app'],    //вставляются стили и скрипты из входной точки app
        }),
        new BrowserSyncPlugin(
            {
                // host: 'localhost',
                // port: 3000,
                proxy: 'http://game.vue',
                notify: false
            },
            // plugin options
            {
                injectCss: true,
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(html|php)$/,
                use: [
                    {
                        loader: 'ejs-loader',
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: "html-loader",
                        options: {
                            minimize: !isDev
                        }
                    },

                ]
            },
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {sourceMap: true}
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}

                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                // images / icons
                test: /\.(png|jpg|gif|svg|woff(2)?|ttf|eot|mp3)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[contenthash].[ext]",
                    outputPath: 'static'
                }
            },

        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, work_folder_name)
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: isDev ? 'development' : 'production',
};