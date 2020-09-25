// 暗号：做人嘛，最重要的是开心
class txtwebpackPlugin {
    constructor(options) {
      this.$options = Object.assign({ text: '' }, options)
    }
  //如何钩入hooks
  apply(compiler) {
    compiler.hooks.emit.tapAsync("txtwebpackPlugin", (compilation, cb) => {
      compilation.assets["test.txt"] = {
        source:  () => {
          return this.$options.text;
        },
        size: function () {
          return 1024;
        },
      };
      cb();
    });
    compiler.hooks.compile.tap("txtwebpackPlugin", (compilation) => {
      console.log("hello compiler hook");
    });
  }
}

module.exports = txtwebpackPlugin;

  