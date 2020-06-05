### 问题
1、mock  

2、热更新  

3、css抽离对hmr不支持  

4、css、js的HMR原理  

5、css、js的HMR需要单独配置  

6、babel-loader排除第三方，css需要吗?  

7、pollify会判断当前有然后再实现吗？  

8、pollify和babel-plugin-transform-runtime的区别
> .语法转义器。主要对javascript最新的语法糖进行编译，并不负责转译javascript新增的api和全局对象。例如let/const就可以被编译，而includes/Object.assign等并不能被编译。常用到的转译器包有，babel-preset-env、babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest等。在实际开发中可以只选用babel-preset-env来代替余下的，但是还需要配上javascirpt的制作规范一起使用，同时也是官方推荐

> 2.补丁转义器。主要负责转译javascript新增的api和全局对象，例如babel-plugin-transform-runtime这个插件能够编译Object.assign,同时也可以引入babel-polyfill进一步对includes这类用法保证在浏览器的兼容性。

pollify直接在原型链上和全局添加方法，污染全局
babel-runtime、babel-plugin-transform-runtime 自动按需加载、模块化,对于一些原型（property）方法还是要使用pollify
