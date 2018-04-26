const express = require('express')
const router = express()
const fibonacci = require('../utils/fibonacci')

router.get('/', (req, res) => {
  var n = Number(req.query.n)

  try {
    res.send(String(fibonacci(n)))
  } catch (e) {
    res
      .status(500)
      .send(e.message)
  }
})

module.exports = router
