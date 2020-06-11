const path = require('path')

module.exports = {
    entry: path.reslove(__dirname, './src/index.js'),
    output: {
        path: path.reslove(__dirname, './dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            }
        ]
    }
}