const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

var app = express()

// express配置
// 静态路径
app.use(express.static(path.resolve(__dirname, "public")));

// 路由
// 课程1：md5加密
// app.use('/lesson1', require('./router/lesson1'))

// 课程2：爬虫入门
app.use('/lesson2', require('./router/lesson2'))

// 课程3：使用 eventproxy 控制并发
app.use('/lesson3', require('./router/lesson3'))

// 课程4：使用 async 控制并发
app.use('/lesson4', require('./router/lesson4'))

// 课程5：测试用例：supertest
app.use('/lesson5', require('./router/lesson5'))

// 课程7：正则表达式
app.use('/lesson7', require('./router/lesson7'))

// 课程8：用 benchmark 测速
app.use('/lesson8', require('./router/lesson8'))

// 课程9：作用域和闭包
app.use('/lesson9', require('./router/lesson9'))

// 课程10：作用域和闭包
app.use('/lesson10', require('./router/lesson10'))


app.listen(PORT, (req, res) => {
  console.log('app is running at port: ' + PORT)
})

module.exports = app
