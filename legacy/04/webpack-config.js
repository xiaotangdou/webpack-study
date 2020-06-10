module.exports = {
    module: {
        // loader性能消耗过大
        // loader查找机制：1、查找loader 2、查找文件
        // 优化查找范围
        rules: [
            {
                test: /\.css$/,
                include: Path2D.reslove(__dirname, './src'),
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    reslove: {
        // node_modules 查找范围（第三方查找依赖）
        modules: [],
        // 1、设置别名；2、减少查找次数
        alias: {},
        // 拓展文件后缀名
        extensions: [],
        // 排除打包
        externals: {
            // const _ = require('lodash')
            // 排除 lodash 包，暴露全局变量 _
            'lodash': '_'
        }
    }
}