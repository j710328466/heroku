const express = require('express')
const router = express()

// 作用域
var parent = function () {
  var name = 'parent_name'
  var age = '28'

  var child = function () {
    var name = 'child_name'
    var childAge = '13'
    console.log(name, age, childAge)
  }
  // console.log(name, age, childAge)
}

// 闭包
var adder = function (x) {
  var base = x
  return function (n) {
    return n + base
  }
}

var add10 = adder(10)
console.log(add10(5))

var add20 = adder(20)
console.log(add20(5))

// -----------------------------------
// 闭包示例
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log('处理前：' + i)
  }, 5)
}

for (var i = 0; i < 5; i++) {
  (function (i){
    setTimeout(() => {
      console.log('处理后：' + i)
    }, 5);
  })(i)
}
// -----------------------------------
// this apply call bind
var obj = {value: 100}

var foo = function() {
  console.log(this)
}

// foo() //指向 node
foo.apply(obj)
foo.call(obj)

var newObj = foo.bind(obj)
newObj()

// -----------------------------------
router.get('/', (req, res) => {
  res.send('test')
})

module.exports = router
