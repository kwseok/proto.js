const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'proto.js',
        minifyFilename: 'proto.min.js',
        sourceMapFilename: 'proto.js.map'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    devtool: '#inline-source-map'
};
