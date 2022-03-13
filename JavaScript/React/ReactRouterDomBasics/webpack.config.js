//var path = require('path');
//var webpack = require('webpack');
console.log(__dirname);
module.exports = {
    mode: 'development',
    entry: './source/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
