const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 上下文，项目打包的相对路径，默认 process.cwd()项目当前目录
    context: process.cwd(),
    entry:  "./src/index.js",
    output: {
        // 一个绝对路径，代表打包在本地磁盘上的物理位置。这个配置项在生产模式下是必须的（因为你要打包至少要指定打包到哪吧..），
        // 但是在开发模式下不是必须的，因为 webpackDevServer 打包出来的文件都在内存中而没有打包到磁盘中。
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        // 打包出来的资源的 URL 前缀（虽然名为打包，但是这个配置项在生产模式和开发模式中都很重要，因为开发模式就是打包在内存中），
        // 即在浏览器中访问的路径的前缀。可以填写相对路径或者绝对路径：
        // 相对路径会被解析为相对 HTML 的路径
        // 也可以填写绝对路径，比如将资源托管在 CDN 上时
        // 这个配置项会加到每个 runtime 或 loader （和 webpack 相关的路径）产生的 URL 中，所以这个配置项在大多数情况下都是以 / 结尾
        // 引入到index.html资源的前缀
        publicPath: '/aaa/'
    },
    // none development production
    mode: 'production',
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
                test: /\.(png|jpeg)/,
                loader: "file-loader",
                options: {
                    name: "[name]_[hash:6].[ext]",
                    outputPath: "images/"
                }
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devServer: {
        open: true,
        // 决定了 webpackDevServer 启动时服务器资源的根目录，默认是项目的根目录。
        // 在有静态文件需要 serve 的时候必填，contentBase 不会影响 path 和 publicPath，它唯一的作用就是指定服务器的根目录来引用静态文件。
        // 可以这么理解 contentBase 与 publicPath 的关系：contentBase 是服务于引用静态文件的路径，而 publicPath 是服务于打包出来的文件访问的路径，两者是不互相影响的。
        // 把打包的资源托管到这个目录下的devServer.publicPath下
        contentBase: path.join(__dirname, './a/b/'),
        // 在开启 webpackDevServer 时浏览器中可通过这个路径访问 bundled 文件，静态文件会加上这个路径前缀，若是devServer里面的publicPath没有设置，则会认为是output里面设置的publicPath的值。
        // 和 output.publicPath 非常相似，都是为浏览器制定访问路径的前缀。但是不同的是 devServer.publicPath 只影响于 webpackDevServer（一般来说就是 html），但各种 loader 打出来的路径还是根据 output.publicPath。
        // htmlWebpackPlugin
        // htmlWebpackPlugin 可以用来在 html 中插入打包好的 js，那么这个插入的 js 的路径是什么样的呢？
        // 文档中有写这么一句：
        // If you've set a publicPath in your webpack config this will be reflected correctly in this assets hash.
        // 答案是路径会根据 output.publicPath 来确定，这也就是为什么
        // It is recommended that devServer.publicPath is the same as output.publicPath.
        // 因为如果不一样的话，因为打包出来的 js 资源在 html 中会去 output.publicPath 找，但是这个 js 实际上会被 serve 到 devServer.publicPath 的位置，所以这两个在开发环境下强烈推荐一致。
        // 静态资源目录
        publicPath: '/aaa/'
    },

    // 插件，构建时执行的钩子，运行到某个阶段做一些事情
    plugins: [
        // 默认支持ejs模板语法
        new HtmlWebpackPlugin({
            title: 'test',
            template: './index.html',
            filename: 'index.html'
        })
    ]
}