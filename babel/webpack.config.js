const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
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
