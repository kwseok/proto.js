const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'proto.js',
        minifyFilename: 'proto.min.js',
        sourceMapFilename: 'proto.js.map',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional=runtime'
            }
            //{test: /\.coffee$/, loader: 'coffee-loader'}
        ]
    },
    devtool: '#inline-source-map'
};
