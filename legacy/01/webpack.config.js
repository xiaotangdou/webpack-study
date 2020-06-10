const path = require('path')

module.exports = {
    entry: {
        "es-module": "./src/es-module/index.js",
        "common-js": "./src/common-js/index.js",
    },
    output: {
        // path 必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: 'development'
}