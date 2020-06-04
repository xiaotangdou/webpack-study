### cdn
bootcdn.cn

### 问题
1、图片处理，base64 
2、字体处理
3、html如何压缩
4、devServer: contentBase相对webpack的outpath ？

### url-loader
file-loader的加强版，url-loader支持limit属性，
limit：1024 单位字节，小于当前字节会转成base64

### webpack-dev-server 基于express开发
```js
{
    // 默认指向dist，走内存
    contentBase: path.reslove(__dirname, './dist'),
    port: 9999
}
```