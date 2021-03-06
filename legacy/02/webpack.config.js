const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 上下文，项目打包的相对路径，默认 process.cwd()项目当前目录
    context: process.cwd(),
    // 项目入口，string、object、array
    // entry: "./src/index.js"
    // entry: ["./src/index.js"]
    // 对象模式实现多入口，多入口对应多出口，实现多页面应用
    entry: {
        main: './src/index.js'
    },
    output: {
        // path 必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        // filename: 'main.js'
        // 占位符 hash chunkhash name id
        // hash 整个项目构建的hash，每次构建都会生成，默认20位
        // chunkhash 根据入口entry进行依赖解析，构建对应的chunk，只要组成entry的模块内容没变，则chunkhash不变
        filename: '[name]-[hash:20]-[chunkhash]-[id].js'
    },
    // none development production
    mode: 'development',

    // loader 处理不认识的模块
    // webpack构建时，遇到不认识的文件格式时会来module中找对应的loader
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 把css加入到js
                // style-loader 运行时提取css，并创建style标签插入到html
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                // css-loader 把css加入到js
                // style-loader 运行时提取css，并创建style标签插入到html
                use: [
                    {
                        loader: "style-loader",
                    }, 
                    {
                        loader: "css-loader",
                        options: {
                            // 开启css module
                            modules: true
                        }
                    },
                    // css后处理器
                    {
                        loader: 'postcss-loader'
                    },
                    "less-loader"
                ]
            },
            {
                loader: "file-loader",
                options: {
                    name: "[name]_[hash:6].[ext]",
                    outputPath: "images/"
                }
            }
        ]
    },

    // 插件，构建时执行的钩子，运行到某个阶段做一些事情
    plugins: [
        // 默认支持ejs模板语法
        new HtmlWebpackPlugin({
            // 选择模板
            template: '',
            filename: ''
        })
    ]
}