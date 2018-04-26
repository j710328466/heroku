const express = require('express')
const router = express()

router.get('/', (req, res) => {
  let regExp = /p[^h]/g
  let str = "python php ruby jsonp javascript perhapsphpisoutdated"
  let newStr = str.split(' ');
  let newArr = []
  newStr.forEach((el) => {
    if (regExp.test(el)) {
      newArr.push(el)
    }
  })
  res.send({data: newArr})
})

module.exports = router
