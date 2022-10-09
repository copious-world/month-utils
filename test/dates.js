let util = require('../index')


let da = new Date()
console.log(da)


let rel = -27

let b = util.first_day_of_relative_month(da,rel)

let testd = new Date(b)

console.log(testd)
