const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        // 1% 市场占有率
        autoprefixer({
            overrideBrowserslist: ["last 2 versons", ">1%"]
        })
    ]
}