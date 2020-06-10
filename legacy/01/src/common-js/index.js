// const { a, b } = require('./a')
// const c = require('./a')

// console.log(a, b)

// console.log(c)

require.ensure(['./a'], (a) => {
    console.log(a)
})
