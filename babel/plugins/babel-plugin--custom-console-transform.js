// import BabelCore, { PluginObj } from '@babel/core';

/**
 * 
 * @param {object} babelObj - 当前的babel对象
 * @param {any} payload - 插件参数
 * @param {string} configPath - 配置文件的绝对路径
 */
module.exports = function(babelObj, payload, configPath) {
    return {
        name: 'custom-console-transform',
        visitor: {
            CallExpression(path, source){
                const { opts } = source
                const callee = path.get('callee')
                
                if ( callee.node.type === 'MemberExpression' && callee.node.object.name === 'customConsole') {
                    if (opts.silent) {
                        path.remove()
                    }
                }
            }
        }    
    }
}