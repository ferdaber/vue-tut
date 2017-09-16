const path = require('path')
const webpack = require('webpack')

let config = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve('dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader'
                    }
                },
                test: /\.vue$/
            },
            {
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                test: /\.tsx?$/
            },
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                },
                test: /\.(png|jpg|gif|svg)$/
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
    },
    devtool: '#eval-source-map'
}

process.env.NODE_ENV === 'production' && (config = {
    ...config,
    devtool: '#source-map',
    plugins: [...(config.plugins || []),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: { warnings: false }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })]
})

module.exports = { ...config }
