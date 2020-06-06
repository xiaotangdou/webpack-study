### 问题
1、mock  

2、热更新  

3、css抽离对hmr不支持  

4、css、js的HMR原理  

5、css、js的HMR需要单独配置  

6、babel-loader排除第三方，css需要吗?  

7、pollify会判断当前有然后再实现吗？  
不会，pollify直接在原型链上,实例上和全局添加方法，例如全局api: promise, [1, 3, 4].map
 
8、pollify和babel-plugin-transform-runtime的区别
> .语法转义器。主要对javascript最新的语法糖进行编译，并不负责转译javascript新增的api和全局对象。例如let/const就可以被编译，而includes/Object.assign等并不能被编译。常用到的转译器包有，babel-preset-env、babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest等。在实际开发中可以只选用babel-preset-env来代替余下的，但是还需要配上javascirpt的制作规范一起使用，同时也是官方推荐

> 2.补丁转义器。主要负责转译javascript新增的api和全局对象，例如babel-plugin-transform-runtime这个插件能够编译Object.assign,同时也可以引入babel-polyfill进一步对includes这类用法保证在浏览器的兼容性。

pollify直接在原型链上和全局添加方法，污染全局
babel-runtime、babel-plugin-transform-runtime 自动按需加载、模块化,对于一些原型（property）方法还是要使用pollify

9、Babel：plugin、preset的区别与使用，执行顺序

```js
{
    "presets": [
        [
            "@babel/preset-env", {
                "targets": { "edge": "17", "firefox": "60", "chrome": "67", "safari": "11.1", "Android":"6.0" },
                "useBuiltIns": "usage", //按需注⼊入
                 "corejs": 2
            } 
        ],
        "@babel/preset-react"
    ]
}
```

先执行完所有Plugin，再执行Preset。
多个Plugin，按照声明次序顺序执行。
多个Preset，按照声明次序逆序执行。

大致就是。plugin: founder-transform ...... import -> presets: @babel/preset-react @babel/preset-env
preset 也是一系列插件啦，所以你可以想象时一排插件对ast进行改写

preset是对plugin使用上的优化
plugin阶段：
如果用户想使用箭头函数、promise那么要把这些插件一个个引进来
preset阶段：
可以简单的把Babel Preset视为Babel Plugin的集合。比如babel-preset-es2015就包含了所有跟ES6转换有关的插件

10、webpack loader 执行顺序

```js
{
    {
   rules:[
    {
     test:/\.js$/,
     use:{
      loader:'loader3'
     }
    },
    {
     test:/\.js$/,
     use:{
      loader:'loader2'
     },
     enforce:'pre'
    },
    {
     test:/\.js$/,
     use:{
      loader:'loader1'
     }
    }
   ]
}
```
一般情况下，loader的执行顺序为从右往左，从下往上。
可以通过enforce属性去改变执行顺序。
enforce:‘pre’ 前置 权重最高
enforce:‘normal’ 不变 权重第二
enforce:‘inline’ 行内 权重第三
enforce:‘post’ 后置 权重第四

11、hash chuankhash contenthash

hash：整个项目构建的hash，每次构建都会生成，默认20位
chunkhash：根据入口entry进行依赖解析，构建对应的chunk，只要组成entry的模块内容没变，则chunkhash不变
contenthash：内容不变，则不变