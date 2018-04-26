const express = require('express')
const utility = require('utility')
const router = express()

router.get('/', (req, res) => {
  if (req.query) {
    const text = utility.md5(req.query.a)
    res.send(text)
  }
})

module.exports = router
